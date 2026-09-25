import EmployeeForm from '@/components/EmployeeForm';
import Modal from '@/components/Modal';

const EditEmployeeForm = () => {


    return (
        <Modal title="Редактировать сотрудника">
            <EmployeeForm
                submitText="Сохранить изменения"
                resetText="Сбросить"
            />
        </Modal>
    );
};

export default EditEmployeeForm;