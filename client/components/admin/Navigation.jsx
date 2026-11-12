import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-60 bg-blue-500 p-5 text-white">
        <h2 className="text-xl font-bold mb-8 ">Dashboard</h2>

        <nav className="flex flex-col gap-4">
          <Link
            to="student"
            className="p-3 rounded hover:bg-blue-700 transition"
          >
            Student
          </Link>

          <Link
            to="employee"
            className="p-3 rounded hover:bg-blue-700 transition"
          >
            Employee
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Navigation;
