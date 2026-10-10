import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectEmployeeById, updateEmployee } from '@/store/slices/employeesSlice';
import { useToast } from '@/hooks/useToast';
import type { EmployeeId, EmployeeFormFields } from '@/shared/employee';
import EmployeeForm from '@/components/EmployeeForm';
import Modal from '@/components/Modal';

interface EditEmployeeFormProps {
    selectedId: EmployeeId;
    onCloseModal: () => void;
}

const EditEmployeeForm = ({ onCloseModal, selectedId }: EditEmployeeFormProps) => {

    const { showToast } = useToast();

    const employee = useAppSelector(state => selectEmployeeById(state, selectedId));

    const dispatch = useAppDispatch();

    const getInitialValues = (): EmployeeFormFields => {
        const { firstName, lastName, email, position, salary } = employee;
        return { firstName, lastName, email, position, salary: String(salary) };
    };

    const onSubmit = (employeeForm: EmployeeFormFields) => {
        const id = employee.id;
        const changes = { 
            ...employeeForm, 
            salary: Number(employeeForm.salary),
            updatedAt: new Date().toISOString(),
        };
        dispatch(updateEmployee({ id, changes }));
        showToast(
            'Изменения сохранены',
            `Данные сотрудника ${employee.firstName} ${employee.lastName} успешно обновлены.`,
        );

        onCloseModal();
    };

    return (
        <Modal onClose={onCloseModal} title="Редактировать сотрудника">
            <EmployeeForm
                submitText="Сохранить изменения"
                resetText="Сбросить"
                initialValues={getInitialValues()}
                readOnlyFields={['firstName', 'lastName']}
                onSubmit={onSubmit}
            />
        </Modal>
    );
};

export default EditEmployeeForm;