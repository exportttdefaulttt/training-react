import type { HTMLInputTypeAttribute } from 'react';
import type { Employee } from './employee';

type EmployeeFormFields = Extract<keyof Employee, 'firstName' | 'lastName' | 'email' | 'position' | 'salary'>;

type EmployeeFormFieldConfig = {
    name: EmployeeFormFields;
    label: string;
    type: HTMLInputTypeAttribute;
}

export const EMPLOYEE_FORM_FIELDS: EmployeeFormFieldConfig[] = [
    { name: 'firstName', label: 'Имя', type: 'text' },
    { name: 'lastName', label: 'Фамилия', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'position', label: 'Должность', type: 'text' },
    { name: 'salary', label: 'Зарплата', type: 'number' },
];