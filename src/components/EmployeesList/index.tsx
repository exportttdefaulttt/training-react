import EmptyListEmployees from '@/components/EmptyListEmployees';
import EmployeeCard from '@/components/EmployeeCard';

import './EmployeesList.scss';

const EmployeesList = () => {

    const employees = [
        { 
            id: 1, firstName: 'Леонид', lastName: 'Филоненко', email: 'leonid88filonenko@bk.ru',
            position: 'Программист', salary: 80000, isBonus: true, isImportant: false, 
            createdAt: '15.09.2026', updatedAt: undefined,
        },
        {
            id: 2, firstName: 'Амат', lastName: 'Муразян', email: 'amat.murz@gmail.com',
            position: 'Тренер', salary: 125500, isBonus: false, isImportant: true, 
            createdAt: '10.09.2026', updatedAt: undefined,
        },
        {
            id: 3, firstName: 'Никита', lastName: 'Николаев', email: 'nikitanikolaev@mail.ru',
            position: 'Администратор', salary: 51000, isBonus: false, isImportant: false, 
            createdAt: '12.09.2026', updatedAt: '14.09.2026',
        },
    ];

    if (!employees.length) {
        return <EmptyListEmployees />;
    }

    return (
        <section className="employees">
            {
                employees.map(({ id, ...employeeProps }) => (
                    <EmployeeCard
                        key={id}
                        {...employeeProps}
                    />
                ))
            }
        </section>
    );
}
 
export default EmployeesList;