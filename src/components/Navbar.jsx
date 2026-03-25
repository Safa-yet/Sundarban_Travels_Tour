import { useState, useRef, useEffect } from 'react'

const navLinks = [
  {
    label: 'Home',
    dropdown: ['Home 1', 'Home 2', 'Home 3', 'Home 4'],
  },
  {
    label: 'About Us',
    dropdown: ['About Places', 'About Membership', 'About Owner'],
  },
  {
    label: 'Blog',
    dropdown: ['Blog', 'Blog Details'],
  },
  {
    label: 'Dashboard',
    dropdown: ['My Booking', 'My Listing', 'Add Tour'],
  },
  {
    label: 'Contact',
    dropdown: [],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus()
  }, [searchOpen])

  return (
    <header className="bg-white sticky top-0" style={{ zIndex: 110 }}>
      {/* Inner top bar */}
      <div className="inner-header justify-between hidden lg:flex">
        <ul className="flex items-center gap-5">
          <li className="list-item">
            <i className="fa-solid fa-calendar text-secondary"></i>
            <p className="text-smText">Thursday, Dec 26, 2025</p>
          </li>
          <li className="list-item">
            <i className="fa-solid fa-envelope text-secondary"></i>
            <p className="text-smText">Info@Webmail.Com</p>
          </li>
          <li className="list-item">
            <i className="fa-solid fa-phone text-secondary"></i>
            <p className="text-smText">684 555-0102 490</p>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <li className="list-item">
            <i className="fa-solid fa-calendar text-secondary icon"></i>
            <a href="#" className="underline icon">Booking Now</a>
          </li>
          <p className="text-smText">Follow us :</p>
          <div className="flex gap-3">
            <a href="#"><i className="fa-brands fa-facebook-f icon"></i></a>
            <a href="#"><i className="fa-brands fa-youtube icon"></i></a>
            <a href="#"><i className="fa-brands fa-twitter icon"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter icon"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center container mx-auto list-none h-15 z-10 px-4">
        <li>
          <a href="#home" className="font-bold text-3xl text-secondary">Sundarban</a>
        </li>

        {/* Hamburger */}
        <li
          className="lg:hidden text-2xl hover:cursor-pointer"
          onClick={() => setMobileOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </li>

        {/* Desktop Nav Links */}
        <ul className="gap-8 hidden lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="group relative transition-all duration-300">
              <a href="#home" className="icon py-5">
                {link.label}{' '}
                {link.dropdown.length > 0 && (
                  <i className="fa-solid fa-angle-down arrow__rotate"></i>
                )}
              </a>
              {link.dropdown.length > 0 && (
                <ul className="hidden group-hover:flex flex-col absolute right-0 w-44 text-center text-lg rounded-2xl bg-white shadow-lg overflow-hidden">
                  {link.dropdown.map((item) => (
                    <li key={item}>
                      <a href="#home" className="icon dropdown-link">{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Language / Currency / Search */}
        <ul className="lg:flex hidden gap-8 items-center relative">
          <li className="group relative transition-all duration-300">
            <a href="#home" className="icon py-5">
              <i className="fa-solid fa-globe text-secondary"></i> English{' '}
              <i className="fa-solid fa-angle-down arrow__rotate"></i>
            </a>
            <ul className="hidden group-hover:flex flex-col absolute right-0 w-40 text-center text-lg rounded-2xl bg-white shadow-lg overflow-hidden">
              {['French', 'Hindi', 'Bangla'].map((lang) => (
                <li key={lang}><a href="#home" className="icon dropdown-link">{lang}</a></li>
              ))}
            </ul>
          </li>
          <li className="group relative transition-all duration-300">
            <a href="#home" className="icon py-5">
              <i className="fa-solid fa-dollar-sign text-secondary"></i> USD{' '}
              <i className="fa-solid fa-angle-down arrow__rotate"></i>
            </a>
            <ul className="hidden group-hover:flex flex-col absolute right-0 w-40 text-center text-lg rounded-2xl bg-white shadow-lg overflow-hidden">
              {['TAKA', 'EURO', 'VND'].map((cur) => (
                <li key={cur}><a href="#home" className="icon dropdown-link">{cur}</a></li>
              ))}
            </ul>
          </li>
          <li className="cursor-pointer relative">
            <i
              className="hover:text-secondary fa-solid fa-search"
              onClick={() => setSearchOpen((v) => !v)}
            ></i>
            <input
              ref={searchRef}
              type="search"
              placeholder="Search"
              className={`bg-white text-black font-semibold absolute top-12 right-4 outline-none border-b-2 placeholder:text-lg px-4 py-2 transition duration-300 ease-in-out w-64 ${searchOpen ? 'block' : 'hidden'}`}
            />
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 text-2xl font-bold transition-all duration-300 lg:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div
          className="absolute top-5 right-5 text-3xl cursor-pointer"
          onClick={() => setMobileOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#home"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-5 mt-8">
          <i className="fa-brands fa-facebook-f text-secondary text-2xl"></i>
          <i className="fa-brands fa-youtube text-secondary text-2xl"></i>
          <i className="fa-brands fa-twitter text-secondary text-2xl"></i>
        </div>
      </div>
    </header>
  )
}
