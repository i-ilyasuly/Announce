import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useModule } from "@/src/components/module-provider";
import { Activity, Volume2, Globe, Clock, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Overview() {
  const { moduleType } = useModule();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Analytics and insights for your AI announcement system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/60 backdrop-blur-sm border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Announcements</CardTitle>
            <Volume2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-emerald-500 flex items-center"><ArrowUpRight className="h-3 w-3" /> +12%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/60 backdrop-blur-sm border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Audio Generated (Sec)</CardTitle>
            <Clock className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231s</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-emerald-500 flex items-center"><ArrowUpRight className="h-3 w-3" /> +8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur-sm border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Auto-Translations</CardTitle>
            <Globe className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              Mostly EN → KZ, RU
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur-sm border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <Activity className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Healthy</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 px-1 py-0 h-4 text-[10px]">API Connected</Badge>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="bg-card/60 backdrop-blur-sm border-border shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>The latest generated announcements across zones.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50">
              <div className="p-2 bg-primary/10 rounded-full text-primary mt-0.5">
                <Volume2 className="h-4 w-4" />
              </div>
              <div>
                 <p className="text-sm font-medium">Boarding call for Flight KC-855</p>
                 <p className="text-xs text-muted-foreground">Zone A • Voice: Aoede • 2 mins ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50">
              <div className="p-2 bg-amber-500/10 rounded-full text-amber-500 mt-0.5">
                <Activity className="h-4 w-4" />
              </div>
              <div>
                 <p className="text-sm font-medium">Delay notice for Train 45</p>
                 <p className="text-xs text-muted-foreground">All Zones • Voice: Charon • 1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50">
              <div className="p-2 bg-blue-500/10 rounded-full text-blue-500 mt-0.5">
                <Globe className="h-4 w-4" />
              </div>
              <div>
                 <p className="text-sm font-medium">Translated: Welcome to Terminal 2 (EN/KZ/RU)</p>
                 <p className="text-xs text-muted-foreground">Terminal 2 • Voice: Kore • 3 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur-sm border-border shadow-sm">
          <CardHeader>
            <CardTitle>Usage by Language</CardTitle>
            <CardDescription>Distribution of Voice API language profiles.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Kazakh (KZ)</span>
                <span className="text-muted-foreground">45%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Russian (RU)</span>
                <span className="text-muted-foreground">35%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">English (US)</span>
                <span className="text-muted-foreground">20%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: '20%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
