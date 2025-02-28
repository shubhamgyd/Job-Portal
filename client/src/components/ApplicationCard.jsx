// export const ApplicationCard = ({jobImage, title, _id, status}) => {
//   return (
//     <>
//     <div className="w-[40vw] border-2 border-black-500 h-[20vh] flex items-center justify-between p-2">
//       <div className="w-[20vw] h-[20vh] ">
//         <img src={jobImage} className="w-full h-[15vh] object-contain"></img>
//         <div className="text-center">{title}</div>
//       </div>
//       <div>
//         <div>Status: {status}</div>
//       </div>
//     </div>
//     </>
//   )
// }

export const ApplicationCard = ({ jobImage, title, _id, status }) => {
  return (
    <div className="w-[40vw] border border-gray-300 shadow-lg rounded-lg p-4 flex items-center gap-4 bg-white">
      <div className="w-[10vw]">
        <img
          src={jobImage}
          alt={title}
          className="w-full h-[12vh] object-cover rounded-md border"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="text-lg font-semibold">{title}</div>
        <div
          className={`text-sm font-medium mt-2 px-3 py-1 rounded-md ${
            status === "Approved"
              ? "bg-green-100 text-green-600"
              : status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          Status: {status}
        </div>
      </div>
    </div>
  );
};
