import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, Search, Calendar as CalendarIcon, Clock, MoreVertical, Edit2, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function Schedule() {
  const mockSchedules = [
    { id: "KC-855", time: "10:30 AM", destination: "Almaty (ALA)", status: "Boarding", type: "Flight" },
    { id: "FZ-1702", time: "11:15 AM", destination: "Dubai (DXB)", status: "On Time", type: "Flight" },
    { id: "TK-351", time: "11:45 AM", destination: "Istanbul (IST)", status: "Delayed", type: "Flight" },
    { id: "LH-649", time: "12:20 PM", destination: "Frankfurt (FRA)", status: "Check-in", type: "Flight" },
    { id: "SU-1956", time: "13:00 PM", destination: "Moscow (SVO)", status: "Arrived", type: "Flight" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Boarding": return <Badge className="bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25 border-emerald-500/20">Boarding</Badge>;
      case "Delayed": return <Badge className="bg-red-500/15 text-red-500 hover:bg-red-500/25 border-red-500/20">Delayed</Badge>;
      case "Arrived": return <Badge className="bg-zinc-500/15 text-zinc-400 hover:bg-zinc-500/25 border-zinc-500/20">Arrived</Badge>;
      case "Check-in": return <Badge className="bg-blue-500/15 text-blue-400 hover:bg-blue-500/25 border-blue-500/20">Check-in</Badge>;
      default: return <Badge className="bg-indigo-500/15 text-indigo-400 hover:bg-indigo-500/25 border-indigo-500/20">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Automated Schedule</h2>
          <p className="text-muted-foreground">Manage automatic announcements triggered by external API systems.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2 shadow-lg shadow-indigo-600/20">
              <Plus className="h-4 w-4" />
              Add Manual Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-zinc-950 border-zinc-800 text-zinc-100">
            <DialogHeader>
              <DialogTitle>Add Schedule Entry</DialogTitle>
              <DialogDescription className="text-zinc-400">
                Create a new manual trigger for an announcement.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id" className="text-right text-zinc-400">ID / Flight</Label>
                <Input id="id" defaultValue="KC-990" className="col-span-3 bg-zinc-900 border-zinc-800" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dest" className="text-right text-zinc-400">Destination</Label>
                <Input id="dest" defaultValue="Astana (NQZ)" className="col-span-3 bg-zinc-900 border-zinc-800" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right text-zinc-400">Time</Label>
                <Input id="time" defaultValue="15:00" type="time" className="col-span-3 bg-zinc-900 border-zinc-800" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-zinc-800 bg-zinc-900/40">
        <CardHeader className="border-b border-zinc-800/50 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <CalendarIcon className="h-4 w-4" />
              <span>Today, Oct 24</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4" />
              <span>Auto-sync active</span>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input
                type="search"
                placeholder="Search ID or Destination..."
                className="w-full bg-zinc-950 border-zinc-800 pl-9 focus-visible:ring-indigo-500"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-zinc-950/50">
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="w-[100px] text-zinc-400 font-medium">Event ID</TableHead>
                <TableHead className="text-zinc-400 font-medium">Time</TableHead>
                <TableHead className="text-zinc-400 font-medium">Destination</TableHead>
                <TableHead className="text-zinc-400 font-medium">Status</TableHead>
                <TableHead className="text-right text-zinc-400 font-medium">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSchedules.map((schedule) => (
                <TableRow key={schedule.id} className="border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                  <TableCell className="font-semibold text-zinc-200">{schedule.id}</TableCell>
                  <TableCell className="text-zinc-400">{schedule.time}</TableCell>
                  <TableCell className="text-zinc-300 font-medium">{schedule.destination}</TableCell>
                  <TableCell>
                    {getStatusBadge(schedule.status)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                       <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10" title="Play Announcment">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-blue-400 hover:bg-blue-400/10">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-400 hover:bg-red-400/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
