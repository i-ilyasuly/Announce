import React, { createContext, useContext, useState } from 'react';

export type ModuleType = 'airport' | 'train' | 'bus' | 'mall';

interface ModuleContextType {
  moduleType: ModuleType;
  setModuleType: (type: ModuleType) => void;
  facilityName: string;
  setFacilityName: (name: string) => void;
}

const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

export function ModuleProvider({ children }: { children: React.ReactNode }) {
  const [moduleType, setModuleType] = useState<ModuleType>('airport');
  const [facilityName, setFacilityName] = useState('Almaty International Airport');

  return (
    <ModuleContext.Provider value={{ moduleType, setModuleType, facilityName, setFacilityName }}>
      {children}
    </ModuleContext.Provider>
  );
}

export function useModule() {
  const context = useContext(ModuleContext);
  if (context === undefined) {
    throw new Error('useModule must be used within a ModuleProvider');
  }
  return context;
}
