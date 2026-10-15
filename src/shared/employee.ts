type BooleanKeys<T> = {
    [P in keyof T]-?: T[P] extends boolean ? P : never;
}[keyof T];

export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    salary: number;
    isBonus: boolean;
    isImportant: boolean;
    createdAt: string;
    updatedAt?: string;
}

type EmployeeFormFieldsName = Extract<keyof Employee, 'firstName' | 'lastName' | 'email' | 'position' | 'salary'>;

export type EmployeeId = Employee['id'];

export type EmployeeFormFields = Record<EmployeeFormFieldsName, string>;

export type EmployeeFormFieldsErrors = Partial<
    Record<keyof EmployeeFormFields, string>
>;

export type EmployeeBooleanKeys = BooleanKeys<Employee>;

export const EMPLOYEES: Employee[] = [
    { 
        id: '1', firstName: 'Леонид', lastName: 'Филоненко', email: 'leonid@gmail.com', position: 'Программист', 
        salary: 60000, isBonus: true, isImportant: false, createdAt: new Date().toISOString(),
    },
    { 
        id: '2', firstName: 'Никита', lastName: 'Николаев', email: 'nikita.n@mail.ru', position: 'Дизайнер', 
        salary: 45000, isBonus: false, isImportant: true, createdAt: new Date().toISOString(),
    },
    { 
        id: '3', firstName: 'Амат', lastName: 'Муразян', email: 'amatinho@gmail.com', position: 'Экономист', 
        salary: 50000, isBonus: false, isImportant: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    },
];