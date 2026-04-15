import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, Zap } from "lucide-react";

const rules = [
  { trigger: "Order Placed", action: "Send WhatsApp Confirmation", active: true },
  { trigger: "Payment Received", action: "Send Receipt via Email", active: true },
  { trigger: "Order Delivered", action: "Request Feedback SMS", active: false },
  { trigger: "Machine Service Due", action: "Notify Supervisor", active: true },
];

const Automation = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Automation</h1>
      <Button><Plus className="h-4 w-4 mr-2" />New Rule</Button>
    </div>
    <div className="grid gap-4">
      {rules.map((r, i) => (
        <Card key={i} className={!r.active ? "opacity-50" : ""}>
          <CardContent className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10"><Zap className="h-5 w-5 text-primary" /></div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-muted text-sm font-medium text-foreground">IF: {r.trigger}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="px-3 py-1 rounded-lg bg-accent text-sm font-medium text-accent-foreground">THEN: {r.action}</span>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.active ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
              {r.active ? "Active" : "Inactive"}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Automation;
