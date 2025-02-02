export const Navbar = () => {
  return (
    <div className="flex justify-between p-4 border-b-2 pb-3 bg-sky-200 text-lg font-medium">
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
