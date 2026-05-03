import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  Mic2, 
  Settings, 
  LayoutDashboard, 
  Calendar, 
  MessageSquare,
  LogOut,
  Bell
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from '@/components/ui/button';

export default function DashboardLayout() {
  // Using fixed module for layout demo purposes. In full version, this comes from state/context.
  const currentModule = "Airport";

  const getNavigation = (module: string) => {
    return [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Live Announcement', href: '/dashboard/live', icon: Mic2 },
      { name: module === 'Airport' ? 'Flights Schedule' : 'Train Timetable', href: '/dashboard/schedule', icon: Calendar },
      { name: 'Templates', href: '/dashboard/templates', icon: MessageSquare },
      { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];
  };

  const navigation = getNavigation(currentModule);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card flex flex-col">
        <div className="h-16 flex items-center px-6 border-b">
          <div className="flex items-center gap-2">
            <Mic2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">Announce</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
            {currentModule} Module
          </div>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground gap-3">
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b bg-card flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Audio Output: Connected
            </div>
            
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs text-muted-foreground mt-1">admin@dictor.kz</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Main scrollable area */}
        <main className="flex-1 overflow-auto p-8">
          {/* <Outlet /> will render the page here */}
          <div className="max-w-5xl mx-auto">
             <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
