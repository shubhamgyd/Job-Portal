export const DateOfPostingFilter = () => {
  return (
    <>
      <div className="w-[9rem] p-2">
        <div className="font-bold">Date of Posting</div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>All time</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Last 24 hours</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Last 7 days</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Last month</div>
          </li>
        </ul>
      </div>
    </>
  );
};
