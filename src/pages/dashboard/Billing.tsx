import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Download, Zap } from "lucide-react";
import { toast } from "sonner";

export default function Billing() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Billing & Subscription</h2>
        <p className="text-muted-foreground">Manage your subscription, billing details, and view invoices.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm md:col-span-2">
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>You are currently on the Enterprise plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between p-4 bg-secondary/50 rounded-lg border border-border/50 items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl font-bold">Enterprise</span>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Unlimited facilities and neural voices</p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-2xl font-bold">$499<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                <p className="text-xs text-muted-foreground">Renews on Oct 1, 2026</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Plan features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Unlimited API Calls</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Premium Neural Voices</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> 24/7 Dedicated Support</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Multi-facility Management</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Custom integrations</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Webhook support</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border/50 py-4 px-6 gap-3">
            <Button variant="outline">Cancel Subscription</Button>
            <Button className="gap-2"><Zap className="h-4 w-4" /> Upgrade Plan</Button>
          </CardFooter>
        </Card>

        <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm md:col-span-1">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Your primary payment method.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-3 border border-border/50 rounded-lg">
              <div className="p-2 bg-secondary rounded-md">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Visa ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/28</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full">Update Method</Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm mt-6 lg:mt-6">
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>Recent invoices and payments.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: 'Sep 1, 2026', amount: '$499.00', status: 'Paid', id: 'INV-2026-09' },
              { date: 'Aug 1, 2026', amount: '$499.00', status: 'Paid', id: 'INV-2026-08' },
              { date: 'Jul 1, 2026', amount: '$499.00', status: 'Paid', id: 'INV-2026-07' },
            ].map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-3 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary/50 rounded-md shadow-sm border border-border/50">
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{invoice.id}</p>
                    <p className="text-xs text-muted-foreground">{invoice.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{invoice.amount}</span>
                  <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">{invoice.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
