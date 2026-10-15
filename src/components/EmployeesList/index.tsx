import { useToast } from '@/hooks/useToast';
import { useState } from 'react';
import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectTotalAllEmployees, removeEmployee, toggleEmployee, type ToggleEmployeePayload } from '@/store/slices/employeesSlice';
import { selectSortedEmployees } from '@/store/selectors';
import type { EmployeeId } from '@/shared/employee';
import EmptyListEmployees from '@/components/EmptyListEmployees';
import EmployeeCard from '@/components/EmployeeCard';
import EditEmployeeForm from '@/components/EditEmployeeForm';

import './EmployeesList.scss';

const EmployeesList = () => {

    const { showToast } = useToast();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState<EmployeeId>('');

    const employees = useAppSelector(selectSortedEmployees);
    const totalEmployees = useAppSelector(selectTotalAllEmployees);

    const dispatch = useAppDispatch();

    const onRemove = useCallback((id: EmployeeId) => {
        dispatch(removeEmployee(id));
        showToast(
            'Сотрудник успешно удален',
            `Сотрудник с id-${id} удален.`,
            'error'
        );
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
        return <EmptyListEmployees totalEmployees={totalEmployees} />;
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