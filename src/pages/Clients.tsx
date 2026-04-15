import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MessageCircle, Edit, Eye } from "lucide-react";

const clients = [
  { name: "Rajesh Kumar", phone: "+91 98765 43210", email: "rajesh@example.com", orders: 24 },
  { name: "Priya Sharma", phone: "+91 87654 32109", email: "priya@example.com", orders: 18 },
  { name: "Amit Patel", phone: "+91 76543 21098", email: "amit@example.com", orders: 32 },
  { name: "Sneha Gupta", phone: "+91 65432 10987", email: "sneha@example.com", orders: 12 },
  { name: "Vikram Singh", phone: "+91 54321 09876", email: "vikram@example.com", orders: 45 },
];

const Clients = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Clients</h1>
      <Button><Plus className="h-4 w-4 mr-2" />Add Client</Button>
    </div>
    <div className="relative max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search clients..." className="pl-9" />
    </div>
    <Card>
      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-muted-foreground">
              <th className="text-left p-4 font-medium">Name</th>
              <th className="text-left p-4 font-medium">Phone</th>
              <th className="text-left p-4 font-medium">Email</th>
              <th className="text-left p-4 font-medium">Total Orders</th>
              <th className="text-left p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.email} className="border-b last:border-0 hover:bg-muted/50">
                <td className="p-4 font-medium text-foreground">{c.name}</td>
                <td className="p-4 text-foreground">{c.phone}</td>
                <td className="p-4 text-muted-foreground">{c.email}</td>
                <td className="p-4 text-foreground">{c.orders}</td>
                <td className="p-4 flex gap-1">
                  <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="text-success"><MessageCircle className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  </div>
);

export default Clients;
