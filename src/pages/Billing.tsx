import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Printer, Download, Trash2 } from "lucide-react";
import { useState } from "react";

interface InvoiceItem { name: string; qty: number; price: number; }

const Billing = () => {
  const [items, setItems] = useState<InvoiceItem[]>([
    { name: "Steel Rod 12mm", qty: 100, price: 450 },
    { name: "Cement Bag 50kg", qty: 20, price: 380 },
  ]);

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const addItem = () => setItems([...items, { name: "", qty: 1, price: 0 }]);
  const removeItem = (idx: number) => setItems(items.filter((_, i) => i !== idx));
  const updateItem = (idx: number, field: keyof InvoiceItem, value: string | number) => {
    const updated = [...items];
    (updated[idx] as any)[field] = value;
    setItems(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Billing</h1>
        <div className="flex gap-2">
          <Button variant="outline"><Printer className="h-4 w-4 mr-2" />Print</Button>
          <Button variant="outline"><Download className="h-4 w-4 mr-2" />Download</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle className="text-base">Invoice Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm text-muted-foreground">Client Name</label><Input placeholder="Client name" className="mt-1" /></div>
                <div><label className="text-sm text-muted-foreground">Invoice Date</label><Input type="date" className="mt-1" /></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Items</CardTitle>
              <Button size="sm" variant="outline" onClick={addItem}><Plus className="h-4 w-4 mr-1" />Add Item</Button>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead><tr className="border-b text-muted-foreground">
                  <th className="text-left py-2 font-medium">Item</th>
                  <th className="text-left py-2 font-medium w-20">Qty</th>
                  <th className="text-left py-2 font-medium w-28">Price</th>
                  <th className="text-left py-2 font-medium w-28">Total</th>
                  <th className="w-10"></th>
                </tr></thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-2 pr-2"><Input value={item.name} onChange={(e) => updateItem(i, "name", e.target.value)} /></td>
                      <td className="py-2 pr-2"><Input type="number" value={item.qty} onChange={(e) => updateItem(i, "qty", +e.target.value)} /></td>
                      <td className="py-2 pr-2"><Input type="number" value={item.price} onChange={(e) => updateItem(i, "price", +e.target.value)} /></td>
                      <td className="py-2 font-medium text-foreground">₹{(item.qty * item.price).toLocaleString()}</td>
                      <td className="py-2"><Button variant="ghost" size="icon" onClick={() => removeItem(i)}><Trash2 className="h-4 w-4 text-destructive" /></Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit">
          <CardHeader><CardTitle className="text-base">Summary</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground">₹{subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">GST (18%)</span><span className="text-foreground">₹{tax.toLocaleString()}</span></div>
            <div className="border-t pt-3 flex justify-between font-semibold"><span className="text-foreground">Total</span><span className="text-foreground">₹{total.toLocaleString()}</span></div>
            <Button className="w-full mt-4">Generate Invoice</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
