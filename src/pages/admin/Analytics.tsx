import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const parcelStats = [
  { name: "Delivered", value: 200 },
  { name: "Pending", value: 102 },
  { name: "In Transit", value: 88 },
  { name: "Cancelled", value: 10 },
];

const monthlyData = [
  { month: "Jan", parcels: 70 },
  { month: "Feb", parcels: 50 },
  { month: "Mar", parcels: 75 },
  { month: "Apr", parcels: 100 },
  { month: "May", parcels: 77 },
];

const COLORS = ["#22c55e", "#eab308", "#3b82f6", "#ef4444"];

export default function Analytics() {
  useEffect(() => {
    document.title = "Dashboard | Parcel Lift ";
  }, []);
  return (
    <div className="p-6 grid gap-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold">Parcel Lift Analytics</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {parcelStats.map((stat, i) => (
          <Card key={i} className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">{stat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card className="shadow-md rounded-2xl bg-gray-200 text-black">
          <CardHeader>
            <CardTitle>Monthly Parcels</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="parcels" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Parcel Status Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={parcelStats}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {parcelStats.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
