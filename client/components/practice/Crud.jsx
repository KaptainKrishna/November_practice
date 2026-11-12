import React, { useState } from "react";

const Crud = () => {
  const model = {
    fullname: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [form, setForm] = useState(model);
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const input = e.target;
    const key = input.name;
    const value = input.value;
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, form]);
    setForm(model);
  };

  const handleDelete = (index) => {
    const backup = [...list];
    backup.splice(index, 1);
    setList(backup);
  };

  const handleEdit = (user, index) => {
    setForm(user);
    setEditIndex(index);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const backup = [...list];
    backup[editIndex] = form;
    setList(backup);
    setEditIndex(null);
    setForm(model);
  };
  return (
    <div className="min-h-screen w-full">
      <div className="bg-white flex justify-center ">
        <div className="p-5">
          <h1>crud practice</h1>
          <form
            onSubmit={editIndex === null ? handleSubmit : saveEdit}
            className="flex flex-col gap-3"
          >
            <input
              value={form.fullname}
              onChange={handleChange}
              name="fullname"
              type="text"
              placeholder="Enter your fullname"
              className="border px-3 py-2 rounded"
            />
            <input
              value={form.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border px-3 py-2 rounded"
            />
            <input
              value={form.mobile}
              onChange={handleChange}
              name="mobile"
              type="number"
              placeholder="Enter your mobile"
              className="border px-3 py-2 rounded"
            />
            <input
              value={form.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter your password"
              className="border px-3 py-2 rounded"
            />
            <button className="bg-blue-500 rounded px-3 py-1 text-white">
              {editIndex === null ? "Submit" : "Save"}
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white p-5">
        <h1>list of student</h1>
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Sr/no.</th>
                <th className="px-4 py-3">Fullname</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Mobile</th>
                <th className="px-4 py-3">Password</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {list.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {user.fullname}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{user.email}</td>
                  <td className="px-4 py-3 text-gray-600">{user.mobile}</td>
                  <td className="px-4 py-3 text-gray-600">••••••••</td>

                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleEdit(user, index)}
                        className="rounded-md bg-blue-500 px-3 py-1.5 text-white hover:bg-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(index)}
                        className="rounded-md bg-red-500 px-3 py-1.5 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Crud;
