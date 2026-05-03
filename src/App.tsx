import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/auth/Login';
import ModuleSelect from './pages/auth/ModuleSelect';
import LiveAnnouncement from './pages/dashboard/LiveAnnouncement';
import Schedule from './pages/dashboard/Schedule';
import Templates from './pages/dashboard/Templates';
import Settings from './pages/dashboard/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/module-select" element={<ModuleSelect />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard/live" replace />} />
          <Route path="live" element={<LiveAnnouncement />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="templates" element={<Templates />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

