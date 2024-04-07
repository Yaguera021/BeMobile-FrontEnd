import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.tsx';
import EmployeeTable from './components/EmployeeTable.tsx';
import SearchBar from './components/SearchBar.tsx';
import MobileTable from './components/MobileTable.tsx';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 660);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 660);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='page-container'>
      <Header />
      <main>
        <SearchBar />
        {isMobile ? <MobileTable /> : <EmployeeTable />}
      </main>
    </div>
  );
}

export default App;
