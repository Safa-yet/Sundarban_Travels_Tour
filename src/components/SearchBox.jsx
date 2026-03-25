import { useState } from 'react'

const destinations = ['Malborn, Australia', 'Tokyo, Japan', 'New York, USA']
const types = ['Booking 1', 'Booking 2', 'Booking 3']
const durations = ['2-4 Days Tour', '5-7 Days Tour', '8+ Days Tour']

function DropdownItem({ icon, title, subtitle, options }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(subtitle)

  return (
    <div className="flex items-center py-6 gap-3 relative w-full md:w-auto border-b md:border-b-0 md:border-r border-black/10 last:border-0">
      <i className={`${icon} text-2xl text-secondary`}></i>
      <div
        className="flex gap-4 items-center cursor-pointer w-full justify-between pe-4"
        onClick={() => setOpen((v) => !v)}
      >
        <span>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-smText">{selected}</p>
        </span>
        <i className={`fa-solid fa-angle-down transition duration-200 ${open ? 'rotate-180' : ''}`}></i>
      </div>
      {/* Dropdown */}
      {open && (
        <div className="list-none shadow-2xl text-center absolute -bottom-24 overflow-hidden bg-white right-0 rounded-lg w-44 z-10">
          {options.map((opt) => (
            <li
              key={opt}
              className="dropdown-link cursor-pointer"
              onClick={() => { setSelected(opt); setOpen(false) }}
            >
              {opt}
            </li>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SearchBox() {
  return (
    <div className="container mx-auto flex md:flex-row flex-col gap-2 md:justify-around items-center bg-white shadow-2xl px-5 rounded-2xl -translate-y-12 relative z-20">
      <DropdownItem
        icon="fa-solid fa-location-dot"
        title="Destination"
        subtitle="Melborn, Australia"
        options={destinations}
      />
      <DropdownItem
        icon="fa-solid fa-location-dot"
        title="Type"
        subtitle="Booking Type"
        options={types}
      />
      <DropdownItem
        icon="fa-solid fa-clock"
        title="Duration"
        subtitle="2-4 Days Tour"
        options={durations}
      />

      {/* Guests */}
      <div className="flex items-center py-6 gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-black/10">
        <i className="fa-solid fa-user text-2xl text-secondary"></i>
        <span className="w-full">
          <h3 className="text-lg font-bold">Guests</h3>
          <input
            type="text"
            className="outline-0 w-full text-smText"
            placeholder="Name"
          />
        </span>
      </div>

      {/* Sliders icon */}
      <div className="py-4 md:py-0">
        <i className="fa-solid fa-sliders text-4xl text-secondary cursor-pointer"></i>
      </div>

      {/* Search button */}
      <button className="flex items-center gap-3 text-xl text-white hover:bg-org cursor-pointer transition duration-300 py-4 px-6 bg-secondary rounded-4xl w-full md:w-auto justify-center my-2 md:my-0">
        <i className="fa-solid fa-search"></i>
        <p>Search</p>
      </button>
    </div>
  )
}
