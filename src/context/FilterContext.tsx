import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FilterContextData {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterContext = createContext<FilterContextData | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filter, setFilter] = useState<string>('');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextData => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
