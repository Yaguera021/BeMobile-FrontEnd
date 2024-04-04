export const fetchEmployees = async () => {
  try {
    const response = await fetch('http://localhost:3001/employees');
    if (!response.ok) {
      throw new Error('Erro ao obter os dados dos funcionários');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
