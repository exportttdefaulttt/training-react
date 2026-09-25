import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

import './EmployeeTextField.scss';

interface EmployeeTextFieldProps {
    label: string;
    name: string;
    type: HTMLInputTypeAttribute;
    value?: string;
    error?: string | null;
    readOnly?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const EmployeeTextField = ({ label, name, type, value, error, readOnly, onChange }: EmployeeTextFieldProps) => {

    return (
        <div className="text-field">
            <label htmlFor={name}>
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                readOnly={readOnly}
                onChange={onChange}
            />

            {error && (
                <span className="field-error">
                    {error}
                </span>
            )}
        </div>
    );
};

export default EmployeeTextField;