function Filter({filterElement, setProperty, property, state, inputHandle}) {
  return (
    <div className="flex flex-col items-center max-w-sm rounded-lg mx-4">
      <h2 className="text-3xl font-extrabold mt-2 text-white">Filter</h2>
      <div className="grid grid-cols-2 gap-2 my-4">
        {filterElement.map((filter) => (
          <button
            key={filter.name}
            className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
            onClick={() => setProperty(filter)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div>
        <label className="text-2xl font-extrabold my-4 capitalize  text-white" htmlFor="range">
          {property.name}: {state[property.name]}%
        </label>
      </div>
      <input
        aria-label="range"
        className=" bg-transparent appearance-none h-3 rounded bg-gradient-to-r  from-pink-500  to-violet-500 my-4"
        max={property.maxValue}
        name={property.name}
        type="range"
        value={state[property.name]}
        onChange={inputHandle}
      />
    </div>
  )
}

export default Filter

// className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
