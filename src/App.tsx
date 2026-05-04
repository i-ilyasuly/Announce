import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/auth/Login';
import ModuleSelect from './pages/auth/ModuleSelect';
import Overview from './pages/dashboard/Overview';
import LiveAnnouncement from './pages/dashboard/LiveAnnouncement';
import Schedule from './pages/dashboard/Schedule';
import Templates from './pages/dashboard/Templates';
import History from './pages/dashboard/History';
import Settings from './pages/dashboard/Settings';
import Profile from './pages/dashboard/Profile';
import Billing from './pages/dashboard/Billing';
import Team from './pages/dashboard/Team';
import { ThemeProvider } from './components/theme-provider';
import { ModuleProvider } from './components/module-provider';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="announce-theme">
      <ModuleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/module-select" element={<ModuleSelect />} />
            
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="/dashboard/overview" replace />} />
              <Route path="overview" element={<Overview />} />
              <Route path="live" element={<LiveAnnouncement />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="templates" element={<Templates />} />
              <Route path="history" element={<History />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Profile />} />
              <Route path="billing" element={<Billing />} />
              <Route path="team" element={<Team />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ModuleProvider>
    </ThemeProvider>
  );
}

