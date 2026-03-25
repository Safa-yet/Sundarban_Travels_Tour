const activities = [
  { label: 'Couple Camping Or Cabin', icon: '/asset/img/image (9).svg', active: true },
  { label: 'Couple Camping Or Cabin', icon: '/asset/img/image (9).svg', active: false },
  { label: 'Couple Camping Or Cabin', icon: '/asset/img/image (9).svg', active: false },
  { label: 'Couple Camping Or Cabin', icon: '/asset/img/image (9).svg', active: false },
  { label: 'Couple Camping Or Cabin', icon: '/asset/img/image (9).svg', active: false },
]

export default function Activities() {
  return (
    <section className="sec4 py-10 bg-secondary/20 relative h-fit overflow-hidden">
      <img src="/asset/img/mask-activiti.png" alt="" className="absolute top-0 w-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Background text */}
        <h2 className="uppercase font-bold text-center transText">Activities</h2>

        {/* Activity Icons */}
        <div className="py-2">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-10 mx-auto">
            {activities.map((act, i) => (
              <div
                key={i}
                className={`flex flex-col text-center items-center gap-5 hover:cursor-pointer p-5 rounded-lg relative transition duration-300 ${
                  act.active
                    ? 'bg-secondary list__Icon2'
                    : 'hover:bg-secondary border-3 border-white list__icon2'
                }`}
              >
                <img src={act.icon} alt={act.label} />
                <p className="text-xl font-semibold">{act.label}</p>
              </div>
            ))}
          </ul>
        </div>

        {/* Adventure CTA Box */}
        <div className="lg:text-left flex flex-col lg:flex-row items-center min-h-[35rem] bg-secondary mt-14 justify-center rounded-2xl text-white relative overflow-hidden">
          {/* Left image */}
          <img
            className="lg:absolute rounded-2xl lg:-left-10 lg:h-11/12 h-56 w-full lg:w-auto object-cover lg:bottom-0"
            src="/asset/img/1 (2).jpg"
            alt="adventure"
          />

          <div className="lg:text-left text-center space-y-4 lg:w-1/2 px-8 lg:px-20 lg:ml-14 py-10 lg:py-0">
            <p className="text-lg font-semibold">Welcome to our Adventure</p>
            <h3 className="text-2xl lg:text-3xl capitalize font-semibold">
              Real adventure &amp; enjoy your dream tours
            </h3>
            <div className="flex flex-col sm:flex-row lg:items-center gap-3 border-b pb-5 border-white/20">
              <h4 className="lg:text-xl font-semibold">
                <i className="fa-solid fa-wheat-awn-circle-exclamation me-2"></i>
                Real adventure Feel
              </h4>
              <h4 className="lg:text-xl font-semibold">
                <i className="fa-solid fa-wheat-awn-circle-exclamation me-2"></i>
                Real adventure Feel
              </h4>
            </div>
            <div className="flex items-center gap-8 flex-wrap justify-center lg:justify-start">
              <button className="bg-black/20 font-semibold p-5 rounded-full w-28 h-28 cursor-pointer duration-300 group">
                <i className="fa-solid fa-arrow-right-long text-5xl -rotate-45 group-hover:rotate-0 duration-300"></i>
              </button>
              <a href="#home" className="text-2xl hover:underline">Get Started Today</a>
            </div>

            <img
              src="/asset/img/mask-tap.png"
              alt=""
              className="absolute right-5 top-10 animate-pulse hidden lg:block"
            />
          </div>
        </div>

        {/* Trolli animation */}
        <figure>
          <img src="/asset/img/mask-print-2.png" alt="" className="trolli" />
        </figure>
      </div>
    </section>
  )
}
