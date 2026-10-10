import * as yup from 'yup';

import type { EmployeeFormFields } from '@/shared/employee';

export const employeeFormSchema: yup.ObjectSchema<EmployeeFormFields> =
    yup.object({
        firstName: yup
            .string()
            .trim()
            .required('Введите имя')
            .min(2, 'Имя должно содержать минимум 2 символа')
            .max(50, 'Имя не должно превышать 50 символов'),

        lastName: yup
            .string()
            .trim()
            .required('Введите фамилию')
            .min(2, 'Фамилия должна содержать минимум 2 символа')
            .max(50, 'Фамилия не должна превышать 50 символов'),

        email: yup
            .string()
            .trim()
            .required('Введите email')
            .email('Введите корректный email'),

        position: yup
            .string()
            .trim()
            .required('Введите должность')
            .max(100, 'Должность не должна превышать 100 символов'),

        salary: yup
            .string()
            .required('Введите зарплату')
            .test(
                'valid-salary',
                'Зарплата должна быть положительным числом',
                (value) => {
                    if (!value?.trim()) {
                        return true;
                    }

                    const salary = Number(value);

                    return Number.isFinite(salary) && salary > 0;
                },
            ),
    });