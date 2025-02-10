export const TypeOfExploymentFilter = () => {
  return (
    <>
      <div className="w-[11rem] p-2">
        <div className="font-bold">Type of Employment</div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Any</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Full-time</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Temporary</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Part-time</div>
          </li>
        </ul>
      </div>
    </>
  );
};
