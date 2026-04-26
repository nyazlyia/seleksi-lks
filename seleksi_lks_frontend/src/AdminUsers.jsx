import { useState } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("admin_users") || "[]");
    if (stored.length === 0) {
      const dummy = [
        {
          id: 1,
          email: "admin@example.com",
          role: "admin",
          registered: "2025-01-01",
        },
        {
          id: 2,
          email: "user1@example.com",
          role: "customer",
          registered: "2025-02-10",
        },
      ];
      localStorage.setItem("admin_users", JSON.stringify(dummy));
      return dummy;
    } else {
      return stored;
    }
  });

  const deleteUser = (id) => {
    if (window.confirm("Delete this user?")) {
      const filtered = users.filter((u) => u.id !== id);
      localStorage.setItem("admin_users", JSON.stringify(filtered));
      setUsers(filtered);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Registered
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.registered}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
