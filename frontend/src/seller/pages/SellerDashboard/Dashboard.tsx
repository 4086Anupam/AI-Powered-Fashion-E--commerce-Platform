import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "2023-10", revenue: 0 },
  { month: "2023-11", revenue: 0 },
  { month: "2023-12", revenue: 0 },
  { month: "2024-01", revenue: 0 },
  { month: "2024-02", revenue: 0 },
  { month: "2024-03", revenue: 0 },
  { month: "2024-04", revenue: 0 },
  { month: "2024-05", revenue: 0 },
  { month: "2024-06", revenue: 0 },
  { month: "2024-07", revenue: 2000 },
  { month: "2024-08", revenue: 7000 },
  { month: "2024-09", revenue: 16000 },
];

const stats = [
  { label: "Total Earnings", value: "$10845" },
  { label: "Total Sales", value: "4" },
  { label: "Total Refund", value: "6749" },
  { label: "Cancel Orders", value: "1" },
];

const Dashboard = () => {
  return (
    <div className="p-6  min-h-screen text-white">
      {/* Cards */}
      <Grid container spacing={2} mb={4}>
        {stats.map((item, index) => (
          <Grid size={{ xs: 12, md: 4, lg: 4 }} key={index}>
            <Card
              sx={{
                background: "linear-gradient(145deg, #111C2D, #0C1320)",
                color: "#fff",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {item.value}
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Chart */}
      <Card
        sx={{
          background: "#111C2D",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <Typography variant="h6" sx={{ color: "#99AABB" }}>
            Chart Type
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: 150, color: "#fff" }}
          >
            <InputLabel sx={{ color: "#99AABB" }}>Last 12 Month</InputLabel>
            <Select
              label="Last 12 Month"
              defaultValue="last12"
              sx={{
                color: "#fff",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3A4A5A",
                },
              }}
            >
              <MenuItem value="last12">Last 12 Month</MenuItem>
              <MenuItem value="6">Last 6 Month</MenuItem>
            </Select>
          </FormControl>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4D9FFF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4D9FFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A3548" />
            <XAxis dataKey="month" stroke="#AAB3C2" />
            <YAxis stroke="#AAB3C2" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1B2635",
                border: "none",
                color: "#fff",
              }}
              labelStyle={{ color: "#ddd" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#4D9FFF"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Dashboard;
