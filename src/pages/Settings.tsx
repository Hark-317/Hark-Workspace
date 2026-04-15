import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-foreground">Settings</h1>
    <div className="grid gap-6 max-w-2xl">
      <Card>
        <CardHeader><CardTitle className="text-base">Profile</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>Business Name</Label><Input defaultValue="Hark Industries" className="mt-1" /></div>
            <div><Label>Email</Label><Input defaultValue="admin@hark.in" className="mt-1" /></div>
          </div>
          <div><Label>Phone</Label><Input defaultValue="+91 98765 43210" className="mt-1" /></div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Notifications</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {["Email notifications", "SMS alerts", "WhatsApp updates", "Service reminders"].map((n) => (
            <div key={n} className="flex items-center justify-between">
              <Label>{n}</Label>
              <Switch defaultChecked />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Settings;
