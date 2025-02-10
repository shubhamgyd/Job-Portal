export const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 bg-sky-200 text-lg font-medium h-[3rem] items-center !px-6 w-full">
      <div>JOB LOGO</div>
      <ol className="flex justify-between gap-12">
        <li>HOME</li>
        <li>JOBS</li>
        <li>CONTACT</li>
        <li>ABOUT</li>
      </ol>
      <div className="flex justify-between gap-2">
        <button>LOGIN</button>
        <button>SIGNUP</button>
      </div>
    </div>
  );
};
