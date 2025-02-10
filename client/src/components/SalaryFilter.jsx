export const SalaryFilter = () => {

  return (
    <>
      <div className=" w-[15rem] p-2">
        <div className="font-bold">
          Salary
        </div>
        <div className="border-2 flex gap-2 p-1 w-[13rem] font-normal">
          <div>Hourly</div>
          <div>|</div>
          <div>Monthly</div>
          <div>|</div>
          <div>Yearly</div>
        </div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Any</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>&lt; 300k</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>&lt; 400k</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>&lt; 500k</div>
          </li>
        </ul>
      </div>
    </>
  )
}