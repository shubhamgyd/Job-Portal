export const LocationFilter = () => {

  return (
    <>
      <div className="w-[8rem] p-2">
        <div className="font-bold">Location</div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="checkbox" />
            <div>All</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox" />
            <div>Ulhasnagar</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox" />
            <div>Ambarnath</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox" />
            <div>Kalyan</div>
          </li>
        </ul>
      </div>
    </>
  )
}