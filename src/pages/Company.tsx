import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Building2, MapPin } from "lucide-react";

const branches = [
  { name: "Hark Industries - HQ", type: "Manufacturing", location: "Mumbai, Maharashtra" },
  { name: "Hark Trading Co.", type: "Trading", location: "Delhi, NCR" },
  { name: "Hark Services", type: "Service", location: "Pune, Maharashtra" },
];

const Company = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Company</h1>
      <Button><Plus className="h-4 w-4 mr-2" />Add Branch</Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {branches.map((b) => (
        <Card key={b.name} className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="p-2 rounded-lg bg-primary/10 w-fit"><Building2 className="h-5 w-5 text-primary" /></div>
            <h3 className="font-semibold text-foreground mt-3">{b.name}</h3>
            <p className="text-sm text-muted-foreground">{b.type}</p>
            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />{b.location}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Company;
