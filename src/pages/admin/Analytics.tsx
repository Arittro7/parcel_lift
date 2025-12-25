/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Legend,
} from "recharts";
import { useGetParcelStatsQuery } from "@/redux/features/Parcel/parcel.api";
import { Skeleton } from "@/components/ui/skeleton";
import { Package } from "lucide-react";

// Dynamic color mapping for all possible statuses
const COLORS: Record<string, string> = {
  Delivered: "#22c55e",     // green
  "In Transit": "#3b82f6",  // blue
  Requested: "#a855f7",     // purple
  Approved: "#8b5cf6",      // violet
  Dispatched: "#06b6d4",    // cyan
  Cancelled: "#ef4444",     // red
  "Failed Delivery": "#dc2626",
  Rescheduled: "#f59e0b",   // amber
  Pending: "#eab308",       // yellow (fallback)
};

export default function Analytics() {
  const { data, isLoading, isError } = useGetParcelStatsQuery(undefined);

  useEffect(() => {
    document.title = "Analytics | Parcel Lift";
  }, []);

  const rawStats = data;
  const statusCounts = rawStats?.statusCounts || [];
  const monthlyParcels = rawStats?.monthlyParcels || [];

  const totalParcels = statusCounts.reduce((sum: number, item: { value: number }) => sum + item.value, 0);

  if (isLoading) {
    return (
      <div className="p-6 space-y-8">
        <Skeleton className="h-10 w-80" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="shadow-lg">
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-10 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Skeleton className="h-96 rounded-2xl" />
          <Skeleton className="h-96 rounded-2xl" />
        </div>
      </div>
    );
  }

  if (isError || !rawStats) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-screen">
        <Package className="h-16 w-16 text-red-500 mb-4" />
        <p className="text-xl text-red-600 font-medium">
          Failed to load analytics data.
        </p>
        <p className="text-muted-foreground mt-2">
          Please check your connection or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <div className="flex items-center gap-3">
        <Package className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Parcel Lift Analytics</h1>
      </div>

      {/* Status Count Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statusCounts.map((stat: { name: string; value: number }, index: number) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl border-l-4"
            style={{
              borderLeftColor: COLORS[stat.name] || "#6b7280",
            }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-gray-700">
                {stat.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold" style={{ color: COLORS[stat.name] || "#374151" }}>
                {stat.value.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {((stat.value / totalParcels) * 100).toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Parcels Bar Chart */}
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Monthly Parcel Trend (Last 12 Months)</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {monthlyParcels.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyParcels} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  />
                  <Bar dataKey="parcels" fill="#6366f1" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No parcel data in the last 12 months
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pie Chart - Status Distribution */}
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Parcel Status Distribution</CardTitle>
            <p className="text-sm text-muted-foreground">
              Total Parcels: <span className="font-bold text-foreground">{totalParcels.toLocaleString()}</span>
            </p>
          </CardHeader>
          <CardContent className="h-80">
            {statusCounts.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusCounts}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={40}
                    paddingAngle={3}
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {statusCounts.map((entry: any, index: number) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[entry.name] || "#94a3b8"}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No status data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}