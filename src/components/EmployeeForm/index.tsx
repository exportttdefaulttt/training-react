import { EMPLOYEE_FORM_FIELDS } from '@/shared/employeeFormFields';

import EmployeeTextField from '@/components/EmployeeTextField';

import './EmployeeForm.scss';

interface EmployeeFormProps {
    submitText: string;
    resetText: string;
}

const EmployeeForm = ({ submitText, resetText }: EmployeeFormProps) => {

    return (
        <form className="employee-form">
            {
                EMPLOYEE_FORM_FIELDS.map(field => (
                    <EmployeeTextField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        // value={employeeForm[field.name]}
                        // error={errors[field.name]}
                        // readOnly={readOnlyFields?.includes(field.name)}
                        // onChange={onHandleChange}
                    />
                ))
            }
            <div className="form-actions">
                <button type="button" className="form-reset-btn">
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