import React, { useEffect, useState } from 'react';
import { fetchEmployees } from '../data/api';
import './styles/MobileTable.css';
import formatPhoneNumber from '../utils/formatPhoneNumber.ts';
import { useFilter } from '../context/FilterContext.tsx';
import Employee from '../types/EmployeeTypes.tsx';
import { ArrowDownIcon, ArrowUpIcon, PointIcon } from '../svgImports.js';

const MobileTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
  const { filter } = useFilter();

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

  const toggleItem = (id: number) => {
    if (expandedItemId === id) {
      setExpandedItemId(null);
    } else {
      setExpandedItemId(id);
    }
  };

  return (
    <div className='mobile-table-container'>
      <div className='mobile-table-header'>
        <div className='foto-mobile-container'>
          <h2>Foto</h2>
        </div>
        <div className='name-mobile-container'>
          <h2>Nome</h2>
        </div>
        <span>
          <img src={PointIcon} alt='' />
        </span>
      </div>
      <ul className='mobile-table-list'>
        {employees.map((employee) => (
          <li key={employee.id} className='mobile-table-item'>
            <div className='mobile-table-item-header'>
              <img src={employee.image} alt={employee.name} />
              <h3>{employee.name}</h3>
              <button
                className='arrow-button'
                onClick={() => toggleItem(employee.id)}
              >
                {expandedItemId === employee.id ? (
                  <img src={ArrowUpIcon} alt='arrowUp' />
                ) : (
                  <img src={ArrowDownIcon} alt='arrowDown' />
                )}
              </button>
            </div>
            {expandedItemId === employee.id && (
              <div className='mobile-table-item-details'>
                <p>
                  <strong>Cargo</strong> {employee.job}
                </p>
                <p>
                  <strong>Data de Admissão</strong>{' '}
                  {new Date(employee.admission_date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Telefone</strong> {formatPhoneNumber(employee.phone)}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileTable;
