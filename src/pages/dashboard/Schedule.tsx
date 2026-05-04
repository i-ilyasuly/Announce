import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, Search, Calendar as CalendarIcon, Clock, Edit2, Trash2, Webhook, CalendarX2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useModule } from "@/src/components/module-provider";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Schedule() {
  const { moduleType } = useModule();

  const getMockData = () => {
    switch(moduleType) {
      case 'airport':
        return [
          { id: "KC-855", time: "10:30 AM", destination: "Almaty (ALA)", status: "Boarding", type: "Flight", auto: true },
          { id: "FZ-1702", time: "11:15 AM", destination: "Dubai (DXB)", status: "On Time", type: "Flight", auto: true },
          { id: "TK-351", time: "11:45 AM", destination: "Istanbul (IST)", status: "Delayed", type: "Flight", auto: false },
          { id: "LH-649", time: "12:20 PM", destination: "Frankfurt (FRA)", status: "Check-in", type: "Flight", auto: true },
        ];
      case 'train':
        return [
          { id: "TR-45", time: "10:30 AM", destination: "Astana (Nurly Zhol)", status: "Boarding", type: "Train", auto: true },
          { id: "TR-12", time: "11:15 AM", destination: "Almaty 2", status: "On Time", type: "Train", auto: true },
          { id: "TR-78", time: "11:45 AM", destination: "Turkestan", status: "Delayed", type: "Train", auto: false },
          { id: "TR-03", time: "12:20 PM", destination: "Tashkent", status: "Platform 3", type: "Train", auto: true },
        ];
      case 'bus':
        return [
          { id: "BUS-104", time: "10:30 AM", destination: "Taraz", status: "Boarding", type: "Bus", auto: true },
          { id: "BUS-205", time: "11:15 AM", destination: "Turkestan", status: "On Time", type: "Bus", auto: true },
          { id: "BUS-301", time: "11:45 AM", destination: "Tashkent", status: "Delayed", type: "Bus", auto: false },
        ];
      case 'mall':
        return [
          { id: "EVT-01", time: "10:30 AM", destination: "Ground Floor", status: "Active", type: "Event", auto: true },
          { id: "EVT-02", time: "12:00 PM", destination: "Food Court", status: "Scheduled", type: "Event", auto: true },
          { id: "EVT-03", time: "18:45 PM", destination: "All Floors", status: "Closing", type: "Store", auto: true },
        ];
      default:
        return [];
    }
  };

  const getHeaders = () => {
    switch(moduleType) {
      case 'airport': return { id: "Flight", dest: "Destination" };
      case 'train': return { id: "Train", dest: "Destination / Station" };
      case 'bus': return { id: "Route", dest: "Destination" };
      case 'mall': return { id: "Event ID", dest: "Location / Floor" };
    }
  };

  const [schedules, setSchedules] = useState(getMockData());
  const headers = getHeaders();

  useEffect(() => {
    setSchedules(getMockData());
  }, [moduleType]);

  const handleDelete = (id: string) => {
    setSchedules(prev => prev.filter(s => s.id !== id));
    toast.success(`Entry ${id} successfully removed from schedule.`);
  };

  const handlePlayStatus = () => {
    toast.success("Playing automated status announcement...");
  };

  const handleRestore = () => {
    setSchedules(getMockData());
    toast.info("Schedule restored with mock data.");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Boarding": 
      case "Active":
        return <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25 border-emerald-500/20 px-2.5 py-0.5 shadow-sm">{status}</Badge>;
      case "Delayed": 
      case "Closing":
        return <Badge className="bg-destructive/15 text-destructive hover:bg-destructive/25 border-destructive/20 px-2.5 py-0.5 shadow-sm">{status}</Badge>;
      case "Arrived": 
        return <Badge className="bg-muted text-muted-foreground hover:bg-muted/80 border-border px-2.5 py-0.5 shadow-sm">Arrived</Badge>;
      case "Check-in": 
      case "Platform 3":
      case "Scheduled":
        return <Badge className="bg-blue-500/15 text-blue-600 dark:text-blue-400 hover:bg-blue-500/25 border-blue-500/20 px-2.5 py-0.5 shadow-sm">{status}</Badge>;
      default: 
        return <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2.5 py-0.5 shadow-sm">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Automated Schedule</h2>
          <p className="text-muted-foreground">Manage automatic announcements triggered by external API systems.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" className="border-border bg-card hidden sm:flex gap-2">
            <Webhook className="h-4 w-4 text-emerald-500" />
            <span className="text-emerald-500 font-medium">Sync Active</span>
          </Button>
          
          <Dialog>
            <DialogTrigger render={<Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-sm font-medium" />}>
                <Plus className="h-4 w-4" />
                Add Manual Entry
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-card border-border">
              <DialogHeader>
                <DialogTitle>Add Schedule Entry</DialogTitle>
                <DialogDescription>
                  Create a new manual trigger for an announcement.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right text-muted-foreground font-semibold">{headers.id}</Label>
                  <Input id="id" defaultValue="" className="col-span-3 bg-secondary/50 border-input" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dest" className="text-right text-muted-foreground font-semibold">{headers.dest}</Label>
                  <Input id="dest" defaultValue="" className="col-span-3 bg-secondary/50 border-input" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="time" className="text-right text-muted-foreground font-semibold">Time</Label>
                  <Input id="time" defaultValue="15:00" type="time" className="col-span-3 bg-secondary/50 border-input" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="font-semibold px-6 shadow-sm">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm overflow-hidden flex flex-col min-h-[400px]">
        <CardHeader className="border-b border-border/50 pb-4 pt-5 px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium bg-secondary/50 px-3 py-1.5 rounded-md border border-border/50">
              <CalendarIcon className="h-4 w-4" />
              <span>Today, Oct 24</span>
              <span className="mx-1">•</span>
              <Clock className="h-4 w-4" />
              <span>12:45 PM Local</span>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={`Search ${headers.id}, ${headers.dest.toLowerCase()}...`}
                className="w-full bg-background/50 border-input pl-9 h-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex-1 flex flex-col">
          {schedules.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center h-[300px]">
              <div className="h-20 w-20 bg-secondary/50 rounded-full flex items-center justify-center mb-6">
                <CalendarX2 className="h-10 w-10 text-muted-foreground opacity-50" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No active schedule found</h3>
              <p className="text-muted-foreground max-w-sm mb-6">There are currently no active events or tasks in the schedule. Ensure the API webhook is synced or add a manual entry.</p>
              <Button onClick={handleRestore} variant="outline" className="border-border hover:bg-secondary">
                <Plus className="h-4 w-4 mr-2" /> Restore Mock Data
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-secondary/40">
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="w-[120px] font-semibold">{headers.id}</TableHead>
                    <TableHead className="font-semibold">Time</TableHead>
                    <TableHead className="font-semibold">{headers.dest}</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-center w-[100px]">Trigger</TableHead>
                    <TableHead className="text-right font-semibold pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedules.map((schedule) => (
                    <TableRow key={schedule.id} className="border-border/50 transition-colors hover:bg-secondary/20">
                      <TableCell className="font-bold text-foreground">{schedule.id}</TableCell>
                      <TableCell className="text-muted-foreground font-medium">{schedule.time}</TableCell>
                      <TableCell className="font-medium">{schedule.destination}</TableCell>
                      <TableCell>
                        {getStatusBadge(schedule.status)}
                      </TableCell>
                      <TableCell className="text-center">
                        {schedule.auto ? (
                          <div className="inline-flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                            <Webhook className="mr-1 h-3 w-3" /> Auto
                          </div>
                        ) : (
                          <div className="inline-flex items-center text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
                            Manual
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-right pr-4">
                        <div className="flex justify-end gap-1">
                          <Button onClick={handlePlayStatus} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full" title="Play Announcment">
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button onClick={() => handleDelete(schedule.id)} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
