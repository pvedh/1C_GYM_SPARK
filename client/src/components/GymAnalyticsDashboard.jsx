import React from "react";
import "./gym.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const checkinData = [
  { day: "Mon", checkins: 40 },
  { day: "Tue", checkins: 52 },
  { day: "Wed", checkins: 38 },
  { day: "Thu", checkins: 44 },
  { day: "Fri", checkins: 61 },
  { day: "Sat", checkins: 75 },
  { day: "Sun", checkins: 33 }
];

const revenueData = [
  { month: "Jan", revenue: 95000 },
  { month: "Feb", revenue: 112000 },
  { month: "Mar", revenue: 121000 },
  { month: "Apr", revenue: 88000 }
];

const attendanceData = [
  { name: "Attended", value: 72 },
  { name: "Missed", value: 28 }
];

const COLORS = ["#34d399", "#f87171"];

export default function GymAnalyticsDashboard() {
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gym Analytics</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
      </header>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6">
        {/* Sidebar */}
        <aside className="col-span-1 bg-white rounded-xl shadow p-4">
          <nav className="space-y-2">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded">Dashboard</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded">Member Progress</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded">Equipment Usage</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded">Class Attendance</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded">Notifications</button>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className="col-span-1 lg:col-span-3 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h2 className="text-sm text-gray-500">Active Members</h2>
              <p className="text-2xl font-bold">320</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h2 className="text-sm text-gray-500">Daily Check-ins</h2>
              <p className="text-2xl font-bold">58</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h2 className="text-sm text-gray-500">Class Attendance</h2>
              <p className="text-2xl font-bold">72%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h2 className="text-sm text-gray-500">Monthly Revenue</h2>
              <p className="text-2xl font-bold">₹1.2L</p>
            </div>
          </div>

          {/* Charts */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-lg font-semibold mb-4">Weekly Check-ins</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={checkinData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="checkins" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h2 className="text-lg font-semibold mb-4">Class Attendance Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
                <Pie
                  data={attendanceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  fill="#8884d8"
                  label
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
}