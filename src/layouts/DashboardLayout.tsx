import React from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  Mic2, 
  Settings, 
  LayoutDashboard, 
  Calendar, 
  MessageSquare,
  LogOut,
  Bell,
  ChevronDown,
  Building2,
  Plane,
  Train,
  Bus,
  ShoppingBag
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/src/components/theme-toggle';
import { useModule, ModuleType } from '@/src/components/module-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { moduleType, setModuleType, facilityName, setFacilityName } = useModule();

  const getNavigation = (type: ModuleType) => {
    let scheduleName = 'Schedule';
    if (type === 'airport') scheduleName = 'Flights Schedule';
    if (type === 'train') scheduleName = 'Train Timetable';
    if (type === 'bus') scheduleName = 'Bus Timetable';
    if (type === 'mall') scheduleName = 'Events/Promos';

    return [
      { name: 'Live Announcement', href: '/dashboard/live', icon: Mic2 },
      { name: scheduleName, href: '/dashboard/schedule', icon: Calendar },
      { name: 'Templates', href: '/dashboard/templates', icon: MessageSquare },
      { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];
  };

  const navigation = getNavigation(moduleType);

  const getModuleIcon = (type: ModuleType) => {
    switch(type) {
      case 'airport': return <Plane className="h-4 w-4" />;
      case 'train': return <Train className="h-4 w-4" />;
      case 'bus': return <Bus className="h-4 w-4" />;
      case 'mall': return <ShoppingBag className="h-4 w-4" />;
    }
  };

  const handleFacilitySwitch = (type: ModuleType, name: string) => {
    setModuleType(type);
    setFacilityName(name);
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar - Enhanced styling for SaaS feel */}
      <div className="hidden md:flex w-64 flex-col border-r border-border bg-card/50 backdrop-blur-xl">
        <div className="h-16 flex items-center px-6 border-b border-border hover:bg-secondary/50 transition-colors cursor-pointer" onClick={() => navigate('/module-select')}>
          <div className="flex items-center gap-2">
            <Mic2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">Announce</span>
          </div>
        </div>

        {/* Enterprise Facility Switcher */}
        <div className="px-4 py-4 border-b border-border/50">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center w-full justify-between h-auto py-2 px-3 border border-border/60 rounded-md shadow-sm bg-background/50 hover:bg-secondary outline-none focus:ring-2 focus:ring-primary/20">
              <div className="flex items-center gap-3 text-left">
                <div className="flex bg-primary/10 text-primary p-1.5 rounded-md">
                  {getModuleIcon(moduleType)}
                </div>
                <div className="flex flex-col truncate w-32">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{moduleType}</span>
                  <span className="text-sm font-medium truncate">{facilityName}</span>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">Your Facilities</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleFacilitySwitch('airport', 'Almaty International Airport')} className="gap-2 cursor-pointer">
                  <Plane className="h-4 w-4 text-muted-foreground" /> Almaty Int. Airport
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFacilitySwitch('train', 'Shymkent Central Station')} className="gap-2 cursor-pointer">
                  <Train className="h-4 w-4 text-muted-foreground" /> Shymkent Central Station
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFacilitySwitch('bus', 'Samal Bus Station')} className="gap-2 cursor-pointer">
                  <Bus className="h-4 w-4 text-muted-foreground" /> Samal Bus Station
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFacilitySwitch('mall', 'Mega Center Almaty')} className="gap-2 cursor-pointer">
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" /> Mega Center Almaty
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/module-select')} className="gap-2 cursor-pointer text-primary">
                <Building2 className="h-4 w-4" /> View All Modules
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex-1 flex flex-col py-4 px-3 overflow-y-auto">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname.startsWith(item.href);
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20" 
                      : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground gap-3 hover:text-foreground" onClick={() => navigate('/')}>
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background relative">
        {/* Subtle top decoration for that polished look */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        {/* Header */}
        <header className="h-16 border-b border-border bg-card/40 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="md:hidden flex items-center gap-2 mr-4">
              <Mic2 className="h-5 w-5 text-primary" />
              <span className="font-bold">Announce</span>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-secondary-foreground">Audio Linked</span>
            </div>
            
            <ThemeToggle />
            
            <button className="relative text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-secondary">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-pulse"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </button>
            
            <div className="flex items-center border-l border-border pl-4 sm:pl-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-3 hover:bg-secondary/50 rounded-full pl-2 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 transition-colors">
                  <Avatar className="h-9 w-9 border border-border">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">SA</AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden sm:block">
                    <p className="text-sm font-semibold leading-none text-foreground">Super Admin</p>
                    <p className="text-xs text-muted-foreground mt-1">dictor.kz</p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team settings</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/')} className="text-destructive">Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Scrollable Main Layout */}
        <main className="flex-1 overflow-auto bg-background/50">
          <div className="max-w-6xl mx-auto p-6 lg:p-8">
             <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
