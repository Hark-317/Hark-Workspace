import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Eye } from "lucide-react";

const workers = [
  { name: "Suresh Yadav", role: "Operator", salary: "₹25,000", status: "Active" },
  { name: "Ravi Verma", role: "Technician", salary: "₹30,000", status: "Active" },
  { name: "Manoj Kumar", role: "Supervisor", salary: "₹40,000", status: "On Leave" },
  { name: "Deepak Jha", role: "Helper", salary: "₹18,000", status: "Active" },
  { name: "Ankit Mishra", role: "Driver", salary: "₹22,000", status: "Active" },
];

const Workers = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Workers</h1>
      <Button><Plus className="h-4 w-4 mr-2" />Add Worker</Button>
    </div>
    <Card>
      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead><tr className="border-b text-muted-foreground">
            <th className="text-left p-4 font-medium">Name</th>
            <th className="text-left p-4 font-medium">Role</th>
            <th className="text-left p-4 font-medium">Salary</th>
            <th className="text-left p-4 font-medium">Status</th>
            <th className="text-left p-4 font-medium">Actions</th>
          </tr></thead>
          <tbody>
            {workers.map((w) => (
              <tr key={w.name} className="border-b last:border-0 hover:bg-muted/50">
                <td className="p-4 font-medium text-foreground">{w.name}</td>
                <td className="p-4 text-foreground">{w.role}</td>
                <td className="p-4 text-foreground">{w.salary}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${w.status === "Active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{w.status}</span></td>
                <td className="p-4"><Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  </div>
);

export default Workers;
