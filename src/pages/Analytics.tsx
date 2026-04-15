import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 240000 }, { month: "Feb", revenue: 310000 }, { month: "Mar", revenue: 280000 },
  { month: "Apr", revenue: 420000 }, { month: "May", revenue: 390000 }, { month: "Jun", revenue: 510000 },
];
const customerData = [
  { month: "Jan", customers: 120 }, { month: "Feb", customers: 145 }, { month: "Mar", customers: 180 },
  { month: "Apr", customers: 220 }, { month: "May", customers: 290 }, { month: "Jun", customers: 357 },
];
const campaignData = [
  { name: "WhatsApp", sent: 1200, opened: 980 }, { name: "Email", sent: 800, opened: 420 }, { name: "SMS", sent: 500, opened: 350 },
];

const Analytics = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader><CardTitle className="text-base">Revenue Trend</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" fill="hsl(262, 80%, 50%, 0.1)" stroke="hsl(262, 80%, 50%)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Customer Growth</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="customers" stroke="hsl(142, 76%, 36%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle className="text-base">Campaign Performance</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Bar dataKey="sent" fill="hsl(262, 80%, 50%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="opened" fill="hsl(262, 80%, 50%, 0.4)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Analytics;
