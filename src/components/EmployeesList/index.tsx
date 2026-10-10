import { useState } from 'react';
import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectAllEmployees, removeEmployee, toggleEmployee, type ToggleEmployeePayload } from '@/store/slices/employeesSlice';
import type { EmployeeId } from '@/shared/employee';
import EmptyListEmployees from '@/components/EmptyListEmployees';
import EmployeeCard from '@/components/EmployeeCard';
import EditEmployeeForm from '@/components/EditEmployeeForm';

import './EmployeesList.scss';

const EmployeesList = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState<EmployeeId>('');

    const employees = useAppSelector(selectAllEmployees);

    const dispatch = useAppDispatch();

    const onRemove = useCallback((id: EmployeeId) => {
        dispatch(removeEmployee(id));
    }, [dispatch]);

    const onToggle = useCallback((payload: ToggleEmployeePayload) => {
        dispatch(toggleEmployee(payload));
    }, [dispatch]);

    const onOpenModal = useCallback((id: EmployeeId) => {
        setIsOpenModal(true);
        setSelectedId(id);
    }, []);

    const onCloseModal = () => {
        setIsOpenModal(false);
        setSelectedId('');
    };

    if (!employees.length) {
        return <EmptyListEmployees />;
    }

    const elements = employees.map((employee) => (
        <EmployeeCard
            key={employee.id}
            {...employee}
            onRemove={onRemove}
            onToggle={onToggle}
            onOpenModal={onOpenModal}
        />
    ));

    return (
        <>
            <section className="employees">
                {elements}
            </section>
            { isOpenModal && <EditEmployeeForm onCloseModal={onCloseModal} selectedId={selectedId} /> }
        </>
    );
}
 
export default EmployeesList;