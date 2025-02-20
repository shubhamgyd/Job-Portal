export const LocationFilter = ({handleFilterChange}) => {

  return (
    <>
      <div className="w-[8rem] p-2">
        <div className="font-bold">Location</div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="radio" onChange={handleFilterChange} value="" name="location"/>
            <div>All</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" onChange={handleFilterChange} value="Ulhasnagar" name="location"/>
            <div>Ulhasnagar</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" onChange={handleFilterChange} value="Ambarnath" name="location"/>
            <div>Ambarnath</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" onChange={handleFilterChange} value="Kalyan" name="location"/>
            <div>Kalyan</div>
          </li>
        </ul>
      </div>
    </>
  )
}