const avatars = [
  '/asset/img/1.jpg',
  '/asset/img/2.jpg',
  '/asset/img/3.jpg',
  '/asset/img/4.jpg',
  '/asset/img/5.jpg',
  '/asset/img/6.jpg',
  '/asset/img/7.jpg',
]

export default function About() {
  return (
    <section className="my-20">
      <div className="container mx-auto px-4">
        {/* Avatars + headline */}
        <div className="flex flex-col lg:flex-row lg:gap-20 items-center gap-5">
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="traveler"
                width={50}
                className={`rounded-full border-2 border-white hover:cursor-pointer ${i !== 0 ? '-ms-3' : ''}`}
              />
            ))}
          </div>
          <h2 className="border-b border-black/30 lg:text-xl text-center lg:text-left">
            2,500 people booked Tommorow land Event in last 24 hours
          </h2>
        </div>

        {/* Main grid */}
        <div className="grid row-auto lg:grid-cols-2 gap-5 mt-10 items-center">
          {/* Video / image */}
          <div className="relative">
            <img
              src="/asset/img/image-video.png"
              alt="video thumbnail"
              className="w-full rounded-lg hover:cursor-pointer"
            />
            <img
              src="/asset/img/vali.png"
              alt="suitcase"
              className="absolute bottom-0 -left-14 lg:-left-24 absBox hidden md:block"
            />
            <img
              src="/asset/img/enjoy.png"
              alt="enjoy"
              className="absolute bottom-0 left-14 lg:left-24"
            />
          </div>

          {/* Text content */}
          <div className="space-y-7">
            <p className="text-secondary text-lg">Explore the world</p>
            <h2 className="text-3xl lg:text-5xl font-semibold capitalize">
              Great opportunity for{' '}
              <span className="font-ital text-shadow">adventure</span> &amp; travels
            </h2>
            <p className="text-smText">
              Welcome to our Print 128 website! We are a professional and
              reliable printing company that offers a wide range of printing
              services to meet your needs.
            </p>

            {/* Feature boxes */}
            <div className="flex items-start gap-5 lg:gap-20 flex-col sm:flex-row">
              <div className="space-y-3">
                <img src="/asset/img/image (1).svg" alt="trusted guide" />
                <h3 className="text-xl text-secondary">Trusted travel guide</h3>
                <p className="text-smText">
                  Welcome to our Print 128 website! Company that offers a wide range.
                </p>
              </div>
              <div className="space-y-3">
                <img src="/asset/img/image (2).svg" alt="personalized trips" />
                <h3 className="text-xl text-secondary">Personalized Trips</h3>
                <p className="text-smText">
                  Welcome to our Print 128 website! Company that offers a wide range.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-10">
              <button className="text-xl uppercase bg-secondary font-semibold py-5 px-8 hover:bg-org cursor-pointer duration-300 rounded text-white">
                More about us
              </button>
              <div className="flex items-center gap-3">
                <img
                  src="/asset/img/1.jpg"
                  alt="CEO"
                  width={50}
                  className="rounded-full border-2 shadow shadow-black hover:cursor-pointer"
                />
                <div>
                  <img src="/asset/img/name.png" alt="signature" />
                  <p className="text-smText text-xs">CEO &amp; FOUNDER</p>
                </div>
              </div>
            </div>

            <div className="flex mt-10 items-center gap-2">
              <img src="/asset/img/image (3).svg" alt="world" />
              <p className="text-secondary text-lg font-plus">
                Checkout Beautiful Places Around the World.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
