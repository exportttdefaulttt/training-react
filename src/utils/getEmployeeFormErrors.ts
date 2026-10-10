import * as yup from 'yup';

import type { EmployeeFormFieldsErrors } from '@/shared/employee';

export const getEmployeeFormErrors = (
    error: yup.ValidationError,
): EmployeeFormFieldsErrors => {
    const errors: EmployeeFormFieldsErrors = {};

    for (const item of error.inner) {
        const field = item.path;

        if (
            field &&
            field in errors === false &&
            item.message
        ) {
            errors[field as keyof EmployeeFormFieldsErrors] = item.message;
        }
    }

    // При abortEarly: false ошибки находятся в error.inner.
    // Если массив пустой, используем основную ошибку.
    if (error.inner.length === 0 && error.path) {
        errors[error.path as keyof EmployeeFormFieldsErrors] = error.message;
    }

    return errors;
};