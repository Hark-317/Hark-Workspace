import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const payments = [
  { type: "Income", amount: "₹15,000", status: "Completed", method: "UPI", date: "2026-04-14" },
  { type: "Expense", amount: "₹8,200", status: "Completed", method: "Bank Transfer", date: "2026-04-14" },
  { type: "Income", amount: "₹22,000", status: "Pending", method: "Cash", date: "2026-04-13" },
  { type: "Expense", amount: "₹5,600", status: "Completed", method: "UPI", date: "2026-04-12" },
  { type: "Income", amount: "₹34,500", status: "Completed", method: "Cheque", date: "2026-04-11" },
];

const Payments = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Payments</h1>
      <div className="flex gap-2">
        <Button variant="outline">Income</Button>
        <Button variant="outline">Expense</Button>
      </div>
    </div>
    <Card>
      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead><tr className="border-b text-muted-foreground">
            <th className="text-left p-4 font-medium">Type</th>
            <th className="text-left p-4 font-medium">Amount</th>
            <th className="text-left p-4 font-medium">Status</th>
            <th className="text-left p-4 font-medium">Method</th>
            <th className="text-left p-4 font-medium">Date</th>
          </tr></thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                <td className="p-4 flex items-center gap-2">
                  {p.type === "Income" ? <ArrowDownLeft className="h-4 w-4 text-success" /> : <ArrowUpRight className="h-4 w-4 text-destructive" />}
                  <span className="text-foreground">{p.type}</span>
                </td>
                <td className="p-4 font-medium text-foreground">{p.amount}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${p.status === "Completed" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{p.status}</span></td>
                <td className="p-4 text-muted-foreground">{p.method}</td>
                <td className="p-4 text-muted-foreground">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  </div>
);

export default Payments;
