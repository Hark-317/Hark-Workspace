import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

const Campaigns = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-foreground">Campaigns</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader><CardTitle className="text-base">Create Campaign</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Campaign name" />
          <Select>
            <SelectTrigger><SelectValue placeholder="Select audience" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clients</SelectItem>
              <SelectItem value="active">Active Clients</SelectItem>
              <SelectItem value="new">New Clients (30 days)</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder="Write your message..." rows={4} />
          <Select>
            <SelectTrigger><SelectValue placeholder="Channel" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
              <SelectItem value="sms">SMS</SelectItem>
              <SelectItem value="email">Email</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full"><Send className="h-4 w-4 mr-2" />Send Campaign</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Recent Campaigns</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {["Diwali Sale - WhatsApp", "New Product Launch - Email", "Payment Reminder - SMS"].map((c) => (
            <div key={c} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium text-foreground">{c}</span>
              <span className="text-xs text-muted-foreground">Sent</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Campaigns;
