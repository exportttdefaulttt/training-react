import { nanoid } from '@reduxjs/toolkit';
import type { Employee, EmployeeFormFields } from '@/shared/employee';

type PreparePayload<T> = {
    payload: T;
}


export const prepareEmployee = (employeeForm: EmployeeFormFields): PreparePayload<Employee> => ({
    payload: {
        id: nanoid(),
        ...employeeForm,
        salary: Number(employeeForm.salary),
        isBonus: false,
        isImportant: false,
        createdAt: new Date().toISOString(),
    }
});