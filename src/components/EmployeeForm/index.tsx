import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import * as yup from 'yup';
import { EMPLOYEE_FORM_FIELDS } from '@/shared/employeeFormFields';
import type { EmployeeFormFields, EmployeeFormFieldsErrors } from '@/shared/employee';
import EmployeeTextField from '@/components/EmployeeTextField';
import { employeeFormSchema } from '@/utils/employeeFormSchema';
import { getEmployeeFormErrors } from '@/utils/getEmployeeFormErrors';
import './EmployeeForm.scss';

interface EmployeeFormProps {
    submitText: string;
    resetText: string;
    onSubmit: (employeeForm: EmployeeFormFields) => void;
    initialValues?: EmployeeFormFields;
    readOnlyFields?: (keyof EmployeeFormFields)[];
}

const EmployeeForm = ({ submitText, resetText, initialValues, readOnlyFields, onSubmit }: EmployeeFormProps) => {

    const [employeeForm, setEmployeeForm] = useState<EmployeeFormFields>({
        firstName: initialValues?.firstName ?? '',
        lastName: initialValues?.lastName ?? '',
        email: initialValues?.email ?? '',
        position: initialValues?.position ?? '',
        salary: initialValues?.salary ?? '',
    });

    const [employeeFormErrors, setEmployeeFormErrors] = useState<EmployeeFormFieldsErrors>({});

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setEmployeeForm(employeeForm => ({ ...employeeForm, [name]: value }));
    };

    const onHandleReset = () => {
        setEmployeeForm({
            firstName: initialValues?.firstName ?? '',
            lastName: initialValues?.lastName ?? '',
            email: initialValues?.email ?? '',
            position: initialValues?.position ?? '',
            salary: initialValues?.salary ?? '',
        });
    };

    const onHandleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            employeeFormSchema.validateSync(employeeForm, { abortEarly: false });
            setEmployeeFormErrors({})
            onHandleReset();
            onSubmit(employeeForm);
        } catch(error) {
            if (error instanceof yup.ValidationError) {
                setEmployeeFormErrors(getEmployeeFormErrors(error));
                return;
            }

            throw error;
        }
    }

    return (
        <form onSubmit={onHandleSubmit} className="employee-form">
            {
                EMPLOYEE_FORM_FIELDS.map(field => (
                    <EmployeeTextField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        value={employeeForm[field.name]}
                        error={employeeFormErrors[field.name]}
                        readOnly={readOnlyFields?.includes(field.name)}
                        onChange={onHandleChange}
                    />
                ))
            }
            <div className="form-actions">
                <button type="button" className="form-reset-btn" onClick={onHandleReset}>
                    {resetText}
                </button>
                <button type="submit" className="form-submit-btn">
                    {submitText}
                </button>
            </div>
        </form>
    );
};

export default EmployeeForm;












// import { useState, type ChangeEvent, type SubmitEvent } from 'react';
// import * as yup from 'yup';
// import { EMPLOYEE_FORM_FIELDS } from '@/shared/employeeFormFields';
// import type { EmployeeFormFields, EmployeeFormFieldsErrors } from '@/shared/employee';
// import EmployeeTextField from '@/components/EmployeeTextField';
// import { employeeFormSchema } from '@/utils/employeeFormSchema';
// import { getEmployeeFormErrors } from '@/utils/getEmployeeFormErrors';
// import './EmployeeForm.scss';

// interface EmployeeFormProps {
//     submitText: string;
//     resetText: string;
//     onSubmit: (employeeForm: EmployeeFormFields) => void;
//     initialValues?: EmployeeFormFields;
//     readOnlyFields?: (keyof EmployeeFormFields)[];
//     onEmptySubmit: () => void;
// }

// const EmployeeForm = ({ submitText, resetText, initialValues, readOnlyFields, onEmptySubmit, onSubmit }: EmployeeFormProps) => {

//     const [employeeForm, setEmployeeForm] = useState<EmployeeFormFields>({
//         firstName: initialValues?.firstName ?? '',
//         lastName: initialValues?.lastName ?? '',
//         email: initialValues?.email ?? '',
//         position: initialValues?.position ?? '',
//         salary: initialValues?.salary ?? '',
//     });

//     const [employeeFormErrors, setEmployeeFormErrors] = useState<EmployeeFormFieldsErrors>({});

//     const [hasShownEmptyToast, setHasShownEmptyToast] = useState(false);


//     const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;

//         setEmployeeForm(employeeForm => ({ ...employeeForm, [name]: value }));

//         if (employeeFormErrors[name as keyof EmployeeFormFields]) {
//             setEmployeeFormErrors(errors => ({ ...errors, [name]: undefined }));
//         }

//         if (value.trim()) {
//             setHasShownEmptyToast(false);
//         }
//     };

//     const onHandleReset = () => {
//         setEmployeeForm({
//             firstName: initialValues?.firstName ?? '',
//             lastName: initialValues?.lastName ?? '',
//             email: initialValues?.email ?? '',
//             position: initialValues?.position ?? '',
//             salary: initialValues?.salary ?? '',
//         });
//         setEmployeeFormErrors({});
//     };

//     const onHandleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
//         event.preventDefault();

//         let isFormEmpty: boolean;

//         if (!initialValues) {
//             isFormEmpty = Object.values(employeeForm).every((value) => value.trim() === '');
//         } else {
//             isFormEmpty = (Object.keys(employeeForm) as (keyof EmployeeFormFields)[])
//                 .every((key) => initialValues[key] === employeeForm[key]);
//         }

//         if (isFormEmpty) {
//             if (!hasShownEmptyToast) {
//                 onEmptySubmit();
//                 setHasShownEmptyToast(true);
//             }

//             return;
//         }

//         try {
//             employeeFormSchema.validateSync(employeeForm, { abortEarly: false });
//             onHandleReset();
//             onSubmit(employeeForm);
//             setHasShownEmptyToast(false);
//         } catch(error) {
//             if (error instanceof yup.ValidationError) {
//                 setEmployeeFormErrors(getEmployeeFormErrors(error));
//                 return;
//             }

//             throw error;
//         }
//     }

//     return (
//         <form onSubmit={onHandleSubmit} className="employee-form">
//             {
//                 EMPLOYEE_FORM_FIELDS.map(field => (
//                     <EmployeeTextField
//                         key={field.name}
//                         label={field.label}
//                         name={field.name}
//                         type={field.type}
//                         value={employeeForm[field.name]}
//                         error={employeeFormErrors[field.name]}
//                         readOnly={readOnlyFields?.includes(field.name)}
//                         onChange={onHandleChange}
//                     />
//                 ))
//             }
//             <div className="form-actions">
//                 <button type="button" className="form-reset-btn" onClick={onHandleReset}>
//                     {resetText}
//                 </button>
//                 <button type="submit" className="form-submit-btn">
//                     {submitText}
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default EmployeeForm;