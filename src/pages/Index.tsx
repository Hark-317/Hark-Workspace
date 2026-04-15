import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Users, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const stats = [
  { title: "Total Revenue", value: "₹12,45,000", change: "+12%", icon: DollarSign, color: "bg-primary/10 text-primary" },
  { title: "Orders Today", value: "34", change: "+8%", icon: ShoppingCart, color: "bg-success/10 text-success" },
  { title: "Active Clients", value: "357", change: "+5%", icon: Users, color: "bg-info/10 text-info" },
  { title: "Pending Payments", value: "₹2,30,000", change: "-3%", icon: Clock, color: "bg-warning/10 text-warning" },
];

const salesData = [
  { month: "Jan", sales: 40000, expenses: 24000 },
  { month: "Feb", sales: 30000, expenses: 13980 },
  { month: "Mar", sales: 52000, expenses: 38000 },
  { month: "Apr", sales: 47800, expenses: 39080 },
  { month: "May", sales: 58900, expenses: 48000 },
  { month: "Jun", sales: 63900, expenses: 38000 },
];

const recentOrders = [
  { id: "ORD-001", client: "Rajesh Kumar", amount: "₹15,000", status: "Delivered" },
  { id: "ORD-002", client: "Priya Sharma", amount: "₹8,500", status: "Processing" },
  { id: "ORD-003", client: "Amit Patel", amount: "₹22,000", status: "Pending" },
  { id: "ORD-004", client: "Sneha Gupta", amount: "₹6,200", status: "Delivered" },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-success/10 text-success",
  Processing: "bg-info/10 text-info",
  Pending: "bg-warning/10 text-warning",
};

const Dashboard = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <Card key={s.title}>
          <CardContent className="p-5 flex items-center gap-4">
            <div className={`p-3 rounded-xl ${s.color}`}>
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{s.title}</p>
              <p className="text-xl font-bold text-foreground">{s.value}</p>
              <span className="text-xs text-muted-foreground">{s.change} from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader><CardTitle className="text-base">Sales Overview</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="hsl(262, 80%, 50%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base">Expenses</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Bar dataKey="expenses" fill="hsl(262, 80%, 50%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader><CardTitle className="text-base">Recent Orders</CardTitle></CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="text-left py-2 font-medium">Order ID</th>
                <th className="text-left py-2 font-medium">Client</th>
                <th className="text-left py-2 font-medium">Amount</th>
                <th className="text-left py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-b last:border-0">
                  <td className="py-3 font-medium text-foreground">{o.id}</td>
                  <td className="py-3 text-foreground">{o.client}</td>
                  <td className="py-3 text-foreground">{o.amount}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[o.status]}`}>{o.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Dashboard;
