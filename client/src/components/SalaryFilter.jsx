export const SalaryFilter = ({handleFilterChange}) => {

  return (
    <>
      <div className=" w-[15rem] p-2">
        <div className="font-bold">
          Salary
        </div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="radio" name="salary" value="" onChange={handleFilterChange}/>
            <div>Any</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" name="salary" value="3" onChange={handleFilterChange}/>
            <div>&lt; 3 LPA</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" name="salary" value="4" onChange={handleFilterChange}/>
            <div>&lt; 4 LPA</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" name="salary" value="5" onChange={handleFilterChange}/>
            <div>&lt; 5 LPA</div>
          </li>
        </ul>
      </div>
    </>
  )
}