import { useState } from 'react'

const tabs = ['New York', 'London', 'Tokyo', 'Malborne', 'Los Angeles']

const tours = [
  { img: '/asset/img/1 (1).jpg', location: 'United States USA', title: 'Days and 6 nights From Moscow', days: 5, persons: 12, price: '$320.00' },
  { img: '/asset/img/2 (1).jpg', location: 'United States USA', title: 'Days and 6 nights From Moscow', days: 5, persons: 12, price: '$320.00' },
  { img: '/asset/img/3 (1).jpg', location: 'United States USA', title: 'Days and 6 nights From Moscow', days: 5, persons: 12, price: '$320.00' },
  { img: '/asset/img/4 (1).jpg', location: 'United States USA', title: 'Days and 6 nights From Moscow', days: 5, persons: 12, price: '$320.00' },
]

function TourCard({ tour }) {
  return (
    <div className="group shadow-lg rounded-lg hover:cursor-pointer hover:shadow-2xl h-fit transition duration-300 ease-in-out overflow-hidden relative">
      <img
        src={tour.img}
        alt="tour"
        className="w-full rounded-lg z-10 group-hover:scale-110 duration-300"
      />
      {/* Top label */}
      <div className="py-1 px-4 bg-sky absolute top-3 left-3 rounded text-white text-sm">
        Best Seller
      </div>

      <div className="p-5 space-y-3 bg-white rounded-2xl -mt-10 relative z-20">
        {/* Hover badge */}
        <div className="py-1 px-4 bg-white group-hover:bg-secondary absolute -top-3 right-5 rounded text-smText group-hover:text-white duration-300">
          Best Seller
        </div>

        <p className="text-smText text-sm">
          <i className="fa-solid fa-location-dot text-secondary me-2"></i>
          {tour.location}
        </p>
        <h3 className="text-xl font-semibold">{tour.title}</h3>
        <p className="text-smText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="flex gap-5 items-center">
          <p className="text-smText text-lg">
            <i className="fa-solid fa-clock text-secondary me-1"></i>{tour.days} Days
          </p>
          <p className="text-smText text-lg">
            <i className="fa-solid fa-user text-secondary me-1"></i>{tour.persons} Person
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-org cursor-pointer duration-300">
            Book Now
          </button>
          <p className="text-secondary font-bold text-lg">{tour.price}</p>
        </div>
      </div>
    </div>
  )
}

export default function TourPackages() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="sec3 py-10">
      <div className="text-center space-y-5 px-4">
        <h2 className="text-2xl text-secondary">Explore the world</h2>
        <p className="text-center text-3xl md:text-5xl font-bold">
          Amazing Featured Tour <br />
          <span className="font-ital text-smText"> Package</span> the world
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 list-none px-4">
        {tabs.map((tab, i) => (
          <li
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`py-3 px-4 text-xl capitalize rounded relative hover:cursor-pointer transition duration-300 ${
              activeTab === i
                ? 'bg-secondary text-white list__icon1'
                : 'hover:bg-secondary list__icon'
            }`}
          >
            {tab}
          </li>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 mx-auto px-5">
        {tours.map((tour, i) => (
          <TourCard key={i} tour={tour} />
        ))}
      </div>

      {/* View More */}
      <button className="group rounded flex gap-2 cursor-pointer duration-300 items-center py-4 px-6 bg-secondary mx-auto text-xl my-8 capitalize hover:bg-org text-white">
        <p>View More</p>
        <i className="fa-solid fa-arrow-alt-circle-right group-hover:animate-bounce"></i>
      </button>
    </section>
  )
}
