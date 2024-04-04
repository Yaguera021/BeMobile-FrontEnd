import './App.css';
import Header from './components/Header.tsx';
import EmployeeTable from './components/EmployeeTable.tsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <EmployeeTable />
      </main>
    </div>
  );
}

export default App;
