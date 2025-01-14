"use client";

import { Card } from "@/components/ui/card";
import {
  Hotel,
  Users,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
];

// Custom axis components to avoid defaultProps warnings
interface AxisProps {
  x: number;
  y: number;
  payload: {
    value: string | number;
  };
}

const CustomXAxis = ({ x, y, payload }: AxisProps) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="middle"
      fill="currentColor"
      className="text-sm"
    >
      {payload.value}
    </text>
  </g>
);

const CustomYAxis = ({ x, y, payload }: AxisProps) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={-10}
      y={0}
      dy={5}
      textAnchor="end"
      fill="currentColor"
      className="text-sm"
    >
      ${payload.value}
    </text>
  </g>
);

export default function DashboardPage() {
  return (
    <div className="h-full space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Hotel className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Total Hotels</p>
              <h3 className="text-2xl font-bold">156</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Team Members</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              <h3 className="text-2xl font-bold">$234,567</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <AlertCircle className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
        </Card>
      </div>
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Revenue Overview</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <g className="recharts-cartesian-axis recharts-xAxis xAxis">
                {data.map((entry, index) => (
                  <CustomXAxis
                    key={index}
                    x={40 + (index * ((100 - 80) / (data.length - 1)))}
                    y={350}
                    payload={{ value: entry.name }}
                  />
                ))}
              </g>
              <g className="recharts-cartesian-axis recharts-yAxis yAxis">
                {[0, 1000, 2000, 3000, 4000].map((value, index) => (
                  <CustomYAxis
                    key={index}
                    x={30}
                    y={350 - (index * (350 / 4))}
                    payload={{ value }}
                  />
                ))}
              </g>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
                formatter={(value) => [`$${value}`, 'Revenue']}
              />
              <Bar
                dataKey="revenue"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}