import { useNavigate } from "react-router-dom"
export const JobPostedCard = ({id, jobImage, title }) => {

  const navigate = useNavigate();
  const handleNavigation = () => {
    console.log(id)
    console.log(jobImage, title)
    navigate(`/userApplications/${id}`)
  }

  
  return (
    <>
      <div className="flex justify-between px-4 py-2 rounded-lg border-2 border-black-400" onClick={handleNavigation}>
        <div className="flex flex-col">
          <img
            src={jobImage}
            className="object-contain  h-[20vh] mr-auto"
          ></img>
          <div className="text-lg font-semibold text-center">{title}</div>
        </div>
      </div>
    </>
  );
};
