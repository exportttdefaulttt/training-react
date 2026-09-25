import EmployeeForm from '@/components/EmployeeForm';

import './AddEmployeeForm.scss';

const AddEmployeeForm = () => {

    return (
        <section className="add-employee">
            <div className="section-header">
                <h2>Добавить сотрудника</h2>
                <p>Заполните данные нового сотрудника</p>
            </div>
            <EmployeeForm 
                submitText="Добавить сотрудника"
                resetText="Очистить"
            />
        </section>
    );
};

export default AddEmployeeForm;