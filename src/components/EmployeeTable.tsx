import React, { useEffect, useState } from 'react';
import { fetchEmployees } from '../data/api';
import './EmployeeTable.css';
import formatPhoneNumber from '../utils/formatPhoneNumber.ts';

interface Employee {
  id: number;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };
    getEmployees();
  }, []);

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Foto</h2>
            </th>
            <th>
              <h2>Nome</h2>
            </th>
            <th>
              <h2>Cargo</h2>
            </th>
            <th>
              <h2>Data de Admissão</h2>
            </th>
            <th>
              <h2>Telefone</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className='image-cell'>
                <img src={employee.image} alt={employee.name} />
              </td>
              <td>
                <h3>{employee.name}</h3>
              </td>
              <td>
                <h3>{employee.job}</h3>
              </td>
              <td>
                <h3>
                  {new Date(employee.admission_date).toLocaleDateString()}
                </h3>
              </td>
              <td>
                <h3>{formatPhoneNumber(employee.phone)}</h3>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
