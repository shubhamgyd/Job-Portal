export const DateOfPostingFilter = ({handleFilterChange}) => {
  return (
    <>
      <div className="w-[9rem] p-2">
        <div className="font-bold">Date of Posting</div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="radio" name="dateOfPosting" onChange={handleFilterChange} value=""/>
            <div>All time</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" name="dateOfPosting" onChange={handleFilterChange} value="1"/>
            <div>Last 24 hours</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" name="dateOfPosting" onChange={handleFilterChange} value="7"/>
            <div>Last 7 days</div>
          </li>
          <li className="flex gap-2">
            <input type="radio" name="dateOfPosting" onChange={handleFilterChange} value="30"/>
            <div>Last month</div>
          </li>
        </ul>
      </div>
    </>
  );
};
