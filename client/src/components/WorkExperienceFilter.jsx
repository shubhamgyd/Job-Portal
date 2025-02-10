export const WorkExperienceFilter = () => {
  return (
    <>
      <div className="w-[10rem] p-2">
        <div className="font-bold">Work Experience</div>
        <ul className="font-normal">
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Any Experience</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Internship</div>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"/>
            <div>Work Remotely</div>
          </li>
        </ul>
      </div>
    </>
  );
};
