import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Package } from "lucide-react";

const products = [
  { name: "Steel Rod 12mm", price: "₹450/kg", stock: 2500, category: "Raw Material" },
  { name: "Cement Bag 50kg", price: "₹380", stock: 800, category: "Construction" },
  { name: "Copper Wire", price: "₹1,200/kg", stock: 150, category: "Electrical" },
  { name: "PVC Pipe 4inch", price: "₹250/m", stock: 3200, category: "Plumbing" },
  { name: "Paint Bucket 20L", price: "₹3,500", stock: 65, category: "Finishing" },
];

const Products = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Products</h1>
      <Button><Plus className="h-4 w-4 mr-2" />Add Product</Button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((p) => (
        <Card key={p.name} className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="p-2 rounded-lg bg-primary/10"><Package className="h-5 w-5 text-primary" /></div>
              <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
            </div>
            <h3 className="font-semibold text-foreground mt-3">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.category}</p>
            <div className="flex justify-between mt-3">
              <span className="font-semibold text-foreground">{p.price}</span>
              <span className="text-sm text-muted-foreground">Stock: {p.stock}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Products;
