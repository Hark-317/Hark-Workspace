import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, AlertTriangle } from "lucide-react";

const machines = [
  { name: "CNC Lathe", status: "Running", lastService: "2026-03-01", nextService: "2026-06-01" },
  { name: "Hydraulic Press", status: "Idle", lastService: "2026-02-15", nextService: "2026-05-15" },
  { name: "Welding Robot", status: "Running", lastService: "2026-01-20", nextService: "2026-04-20" },
  { name: "Drill Machine", status: "Maintenance", lastService: "2026-04-10", nextService: "2026-07-10" },
  { name: "Compressor", status: "Running", lastService: "2026-03-20", nextService: "2026-06-20" },
];

const sc: Record<string, string> = {
  Running: "bg-success/10 text-success", Idle: "bg-muted text-muted-foreground", Maintenance: "bg-warning/10 text-warning",
};

const Machinery = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Machinery</h1>
      <Button><Plus className="h-4 w-4 mr-2" />Add Machine</Button>
    </div>
    <Card className="border-warning/50 bg-warning/5">
      <CardContent className="p-4 flex items-center gap-3">
        <AlertTriangle className="h-5 w-5 text-warning" />
        <span className="text-sm text-foreground"><strong>Service Due:</strong> Welding Robot service is due on April 20, 2026</span>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead><tr className="border-b text-muted-foreground">
            <th className="text-left p-4 font-medium">Machine</th>
            <th className="text-left p-4 font-medium">Status</th>
            <th className="text-left p-4 font-medium">Last Service</th>
            <th className="text-left p-4 font-medium">Next Service</th>
          </tr></thead>
          <tbody>
            {machines.map((m) => (
              <tr key={m.name} className="border-b last:border-0 hover:bg-muted/50">
                <td className="p-4 font-medium text-foreground">{m.name}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${sc[m.status]}`}>{m.status}</span></td>
                <td className="p-4 text-muted-foreground">{m.lastService}</td>
                <td className="p-4 text-muted-foreground">{m.nextService}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  </div>
);

export default Machinery;
