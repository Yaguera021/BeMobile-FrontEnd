import './App.css';
import Header from './components/Header.tsx';
import EmployeeTable from './components/EmployeeTable.tsx';
import SearchBar from './components/SearchBar.tsx';
import MobileTable from './components/MobileTable.tsx';

function App() {
  return (
    <div className='page-container'>
      <Header />
      <main>
        <SearchBar />
        {/* <EmployeeTable /> */}
        {/* <MobileTable /> */}
      </main>
    </div>
  );
}

export default App;
