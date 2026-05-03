import { Card } from "@/components/ui/card";
import { Plane, Train, Bus, ShoppingBag, Mic2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { useModule, ModuleType } from "@/src/components/module-provider";

export default function ModuleSelect() {
  const navigate = useNavigate();
  const { setModuleType, setFacilityName } = useModule();

  const handleSelect = (moduleId: string, name: string) => {
    setModuleType(moduleId as ModuleType);
    if (moduleId === 'airport') setFacilityName('Almaty International Airport');
    if (moduleId === 'train') setFacilityName('Shymkent Central Station');
    if (moduleId === 'bus') setFacilityName('Samal Bus Station');
    if (moduleId === 'mall') setFacilityName('Mega Center Almaty');
    
    navigate("/dashboard/live");
  };

  const modules = [
    {
      id: "airport",
      name: "Airport",
      description: "Flight announcements, boarding calls, and baggage claims.",
      icon: Plane,
      colorClass: "text-blue-500 bg-blue-500/10",
      borderClass: "hover:border-blue-500/50",
      glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]"
    },
    {
      id: "train",
      name: "Train Station",
      description: "Platform updates, train arrivals, and delays.",
      icon: Train,
      colorClass: "text-emerald-500 bg-emerald-500/10",
      borderClass: "hover:border-emerald-500/50",
      glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]"
    },
    {
      id: "bus",
      name: "Bus Station",
      description: "Route schedules, gate changes, and general alerts.",
      icon: Bus,
      colorClass: "text-amber-500 bg-amber-500/10",
      borderClass: "hover:border-amber-500/50",
      glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]"
    },
    {
      id: "mall",
      name: "Shopping Mall",
      description: "Promotions, lost children, and closing time warnings.",
      icon: ShoppingBag,
      colorClass: "text-purple-500 bg-purple-500/10",
      borderClass: "hover:border-purple-500/50",
      glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-6 sm:p-12 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_30%,transparent_110%)] pointer-events-none"></div>
      
      <div className="z-10 flex w-full max-w-6xl flex-col gap-12 mt-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/20">
              <Mic2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">Announce</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <ThemeToggle />
            <span>admin@dictor.kz</span>
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center font-medium text-secondary-foreground border border-border">
              A
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto w-full mt-4">
          <div className="space-y-4 text-center sm:text-left animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Select your facility
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Choose the environment you want to manage. The interface and announcement templates will seamlessly adapt to your selection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {modules.map((module) => (
              <Card 
                key={module.id}
                className={`group relative overflow-hidden flex flex-col justify-between border-border bg-card/60 backdrop-blur-sm p-8 transition-all duration-300 cursor-pointer ${module.borderClass} ${module.glowClass} hover:bg-card hover:-translate-y-1`}
                onClick={() => handleSelect(module.id, module.name)}
              >
                <div className="space-y-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${module.colorClass}`}>
                    <module.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">{module.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                  </div>
                </div>
                <div className="mt-10 flex items-center text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  Open Workspace
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
