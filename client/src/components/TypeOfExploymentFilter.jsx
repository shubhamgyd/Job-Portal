export const TypeOfExploymentFilter = ({handleFilterChange}) => {
  return (
    <>
      <div className="w-[11rem] p-2">
        <div className="font-bold">Type of Employment</div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="radio" value="Any" name="typeOfEmployment" onChange={handleFilterChange}/>
            <div>Any</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" value="Full-time" name="typeOfEmployment" onChange={handleFilterChange}/>
            <div>Full-time</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" value="Temporary" name="typeOfEmployment" onChange={handleFilterChange}/>
            <div>Temporary</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" value="Part-time" name="typeOfEmployment" onChange={handleFilterChange}/>
            <div>Part-time</div>
          </li>
        </ul>
      </div>
    </>
  );
};
