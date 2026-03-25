const footerLinks = {
  'Quick Links': ['Home', 'About Us', 'Tours', 'Blog', 'Contact'],
  'Tour Types': ['Adventure Tours', 'Cultural Tours', 'Beach Tours', 'Mountain Tours', 'City Tours'],
  'Support': ['FAQ', 'Privacy Policy', 'Terms & Conditions', 'Booking Policy', 'Help Center'],
}

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <h2 className="font-bold text-3xl text-secondary">Sundarban</h2>
            <p className="text-white/70 leading-relaxed">
              We provide the best tour and adventure packages for you and your family.
              Experience nature like never before.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition duration-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition duration-300">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-5">
              <h3 className="text-xl font-semibold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-secondary transition duration-200 flex items-center gap-2"
                    >
                      <i className="fa-solid fa-angle-right text-secondary text-sm"></i>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-white/5 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-2xl font-semibold">Subscribe Our Newsletter</h3>
              <p className="text-white/60 mt-1">Get latest tour updates and exclusive deals.</p>
            </div>
            <div className="flex w-full md:w-auto gap-0">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 text-white placeholder:text-white/50 px-5 py-3 rounded-l-full outline-none w-full md:w-72 border border-white/20"
              />
              <button className="bg-secondary hover:bg-org transition duration-300 px-6 py-3 rounded-r-full font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Sundarban Tour &amp; Adventure. All rights reserved.</p>
          <p>Designed with <span className="text-secondary">♥</span> by Safa</p>
        </div>
      </div>
    </footer>
  )
}
