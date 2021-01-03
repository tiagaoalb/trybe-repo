// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const employee = professionalBoard.find((employee) => employee.id === id);
  if (!employee) {
    throw new Error('ID não identificada');
  }
  if (!employee[detail]) {
    throw new Error('Informação indisponível');
  }
  return employee[detail];
};

describe('Testa a função searchEmployee', () => {
  it('test if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('test if searchEmployee(id, "firstName") return the first name of user', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });
  it('test if searchEmployee(id, "lastName") return the last name user', () => {
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });
  it('test if searchEmployee(id, "specialities") return an array with all skills from id', () => {
    expect(searchEmployee('1256-4', 'specialities')).toContain(
      'Hooks',
      'Context API',
      'Tailwind CSS'
    );
  });
  it('test if an error with message "ID não identificada" is returned when an ID does not exists', () => {
    expect(() => {
      searchEmployee('1256-8', 'specialities');
    }).toThrow();
  });
  it('test error message for non existing ID', () => {
    expect(() => {
      searchEmployee('1256-8', 'specialities');
    }).toThrowError(new Error('ID não identificada'));
  });
  it('test if throws and error when the info and ID does not exist', () => {
    expect(() => {
      searchEmployee();
    }).toThrow();
  });
  it('test the error message for missing info', () => {
    expect(() => {
      searchEmployee('4678-2', 'shift');
    }).toThrowError(new Error('Informação indisponível'));
  });
});
