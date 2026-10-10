import { useAppDispatch } from '@/store/hooks';
import { useToast } from '@/hooks/useToast';
import { addEmployee } from '@/store/slices/employeesSlice';
import type { EmployeeFormFields } from '@/shared/employee';

import EmployeeForm from '@/components/EmployeeForm';

import './AddEmployeeForm.scss';

const AddEmployeeForm = () => {

    const { showToast } = useToast();

    const dispatch = useAppDispatch();

    const onAdd = (employeeForm: EmployeeFormFields) => {
        dispatch(addEmployee(employeeForm));
        showToast(
            'Сотрудник успешно добавлен',
            `${employeeForm.firstName} ${employeeForm.lastName} добавлен в список сотрудников.`,
        );
    };

    return (
        <section className="add-employee">
            <div className="section-header">
                <h2>Добавить сотрудника</h2>
                <p>Заполните данные нового сотрудника</p>
            </div>
            <EmployeeForm 
                submitText="Добавить сотрудника"
                resetText="Очистить"
                onSubmit={onAdd}
            />
        </section>
    );
};

export default AddEmployeeForm;