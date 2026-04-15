import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Eye } from "lucide-react";

const orders = [
  { id: "ORD-001", client: "Rajesh Kumar", amount: "₹15,000", status: "Delivered", date: "2026-04-14" },
  { id: "ORD-002", client: "Priya Sharma", amount: "₹8,500", status: "Processing", date: "2026-04-14" },
  { id: "ORD-003", client: "Amit Patel", amount: "₹22,000", status: "Pending", date: "2026-04-13" },
  { id: "ORD-004", client: "Sneha Gupta", amount: "₹6,200", status: "Delivered", date: "2026-04-12" },
  { id: "ORD-005", client: "Vikram Singh", amount: "₹34,500", status: "Processing", date: "2026-04-12" },
];

const sc: Record<string, string> = {
  Delivered: "bg-success/10 text-success", Processing: "bg-info/10 text-info", Pending: "bg-warning/10 text-warning",
};

const Orders = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Orders</h1>
      <Button><Plus className="h-4 w-4 mr-2" />New Order</Button>
    </div>
    <Card>
      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead><tr className="border-b text-muted-foreground">
            <th className="text-left p-4 font-medium">Order ID</th>
            <th className="text-left p-4 font-medium">Client</th>
            <th className="text-left p-4 font-medium">Amount</th>
            <th className="text-left p-4 font-medium">Status</th>
            <th className="text-left p-4 font-medium">Date</th>
            <th className="text-left p-4 font-medium">Actions</th>
          </tr></thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b last:border-0 hover:bg-muted/50">
                <td className="p-4 font-medium text-foreground">{o.id}</td>
                <td className="p-4 text-foreground">{o.client}</td>
                <td className="p-4 text-foreground">{o.amount}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${sc[o.status]}`}>{o.status}</span></td>
                <td className="p-4 text-muted-foreground">{o.date}</td>
                <td className="p-4"><Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  </div>
);

export default Orders;
