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
            status === "accepted"
              ? "bg-green-100 text-green-600"
              : status === "rejected"
              ? "bg-red-100 text-red-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          Status: {status}
        </div>
      </div>
    </div>
  );
};
