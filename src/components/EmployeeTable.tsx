/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { fetchEmployees } from '../data/api';
import './styles/EmployeeTable.css';
import formatPhoneNumber from '../utils/formatPhoneNumber.ts';
import { useFilter } from '../context/FilterContext.tsx';
import Employee from '../types/EmployeeTypes.tsx';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const { filter, setFilter } = useFilter();

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      const filteredData = data.filter((employee: Employee) => {
        return (
          employee.name.toLowerCase().includes(filter) ||
          employee.job.toLowerCase().includes(filter) ||
          employee.phone.toLowerCase().includes(filter)
        );
      });
      setEmployees(filteredData);
    };
    getEmployees();
  }, [filter]);

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };
    getEmployees();
  }, []);

  const tableHeaders = [
    'Foto',
    'Nome',
    'Cargo',
    'Data de Admissão',
    'Telefone',
  ];

  return (
    <div className='table-container' data-testid='employee-table'>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
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
