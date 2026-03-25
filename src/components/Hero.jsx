import { useEffect, useRef } from 'react'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    // Dynamically load Typed.js from CDN and init
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js'
    script.onload = () => {
      typedRef.current = new window.Typed('#typed-element', {
        strings: ['Sundarban', 'Forest', 'Island', 'Nature'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      })
    }
    document.head.appendChild(script)
    return () => {
      if (typedRef.current) typedRef.current.destroy()
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section className="relative flex items-center md:h-screen min-h-[80vh]">
      {/* Background image */}
      <img
        src="/asset/img/slide1.jpg"
        alt=""
        className="h-full w-full object-cover absolute inset-0 -z-10"
      />
      {/* Left mask */}
      <img
        src="/asset/img/mask-slide.png"
        alt="mask"
        className="absolute top-0 left-0 h-full -z-10"
      />
      {/* Bottom floating image */}
      <img
        src="/asset/img/mask-fly.png"
        alt=""
        className="absolute -bottom-16 left-5 maskImg2 hidden md:block"
      />

      {/* Content */}
      <div className="container mx-auto space-y-3 z-0 relative my-12 px-4">
        <p className="font-ital lg:text-xl italic text-secondary font-bold">
          Explore the World
        </p>
        <h1 className="uppercase text-white lg:text-7xl text-4xl w-full lg:w-7/12 font-bold leading-tight">
          Tour Travel &amp; Adventure <br />
          <span id="typed-element" className="text-secondary"></span>
        </h1>

        <p className="lg:w-5/12 w-full my-5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo aperiam
          ipsum error itaque minus inventore incidunt facere illum ea quaerat.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button className="text-center flex gap-1 items-center group lg:text-xl py-3 px-5 bg-secondary/80 uppercase text-white/90 font-semibold rounded hover:cursor-pointer hover:bg-secondary hover:text-white transition duration-300 ease-in-out">
            <p className="group-hover:-translate-x-1.5 transition duration-300">
              Let's get started
            </p>
            <i className="opacity-0 group-hover:opacity-100 fa-solid fa-circle-right"></i>
          </button>
          <button className="text-center flex gap-4 items-center group lg:text-xl py-3 px-5 uppercase text-white/90 font-semibold rounded hover:cursor-pointer transition duration-300 ease-in-out">
            <p>Watch Video</p>
            <i className="invisible group-hover:visible fa-solid fa-circle-right text-secondary"></i>
          </button>
        </div>

        {/* Booking box */}
        <div className="absolute top-0 right-0 lg:right-[41.666667%] absBox py-2 px-5 border-2 border-white hidden sm:block">
          <p className="font-ital text-2xl italic text-secondary font-bold animate-pulse">
            Booking
          </p>
        </div>
      </div>
    </section>
  )
}
