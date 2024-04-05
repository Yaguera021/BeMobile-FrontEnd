import './App.css';
import Header from './components/Header.tsx';
import EmployeeTable from './components/EmployeeTable.tsx';
import SearchBar from './components/SearchBar.tsx';

function App() {
  return (
    <div className='page-container'>
      <Header />
      <main>
        <SearchBar />
        <EmployeeTable />
      </main>
    </div>
  );
}

export default App;
