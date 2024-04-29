import React, { useEffect, useState, useMemo } from 'react';
import { fetchEmployees } from '../data/api';
import './styles/EmployeeTable.css';
import formatPhoneNumber from '../utils/formatPhoneNumber.ts';
import { useFilter } from '../context/FilterContext.tsx';
import Employee from '../types/EmployeeTypes.tsx';

const EmployeeTable = () => {
  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const { filter } = useFilter();

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setAllEmployees(data);
    };
    getEmployees();
  }, []);

  useEffect(() => {
    const filteredData = allEmployees.filter((employee: Employee) => {
      return (
        employee.name.toLowerCase().includes(filter) ||
        employee.job.toLowerCase().includes(filter) ||
        employee.phone.toLowerCase().includes(filter)
      );
    });
    setFilteredEmployees(filteredData);
  }, [allEmployees, filter]);

  const filteredAndFormattedEmployees = useMemo(() => {
    return filteredEmployees.map((employee) => ({
      ...employee,
      phone: formatPhoneNumber(employee.phone),
      admissionDate: new Date(employee.admission_date).toLocaleDateString(),
    }));
  }, [filteredEmployees]);

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
          {filteredAndFormattedEmployees.map((employee) => (
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
                <h3>{employee.admissionDate}</h3>
              </td>
              <td>
                <h3>{employee.phone}</h3>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
