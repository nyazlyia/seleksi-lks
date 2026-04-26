import { useState } from "react";

const AdminDashboard = () => {
  const [stats] = useState(() => {
    const products = JSON.parse(localStorage.getItem("admin_products") || "[]");
    const orders = JSON.parse(localStorage.getItem("admin_orders") || "[]");
    const users = JSON.parse(localStorage.getItem("admin_users") || "[]");
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

    return {
      totalProducts: products.length,
      totalOrders: orders.length,
      totalUsers: users.length,
      revenue: totalRevenue,
    };
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-gray-500 text-sm">Total Products</div>
          <div className="text-3xl font-bold">{stats.totalProducts}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-gray-500 text-sm">Total Orders</div>
          <div className="text-3xl font-bold">{stats.totalOrders}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-gray-500 text-sm">Total Users</div>
          <div className="text-3xl font-bold">{stats.totalUsers}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-gray-500 text-sm">Revenue</div>
          <div className="text-3xl font-bold">${stats.revenue.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
