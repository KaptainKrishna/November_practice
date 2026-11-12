import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="bg-blue-600 px-5 flex justify-between items-center text-white font-semibold py-2 min-w-full">
        <Link to="/practice/home">Home</Link>
        <Link to="/practice/contact">Contact</Link>
        <Link to="/practice/about">About</Link>
        <Link to="/practice/crud">Crud</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
