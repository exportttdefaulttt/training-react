import EmployeeSearch from '@/components/EmployeeSearch';
import EmployeeFilters from '@/components/EmployeeFilters';
import EmployeeSort from '@/components/EmployeeSort';
import './EmployeesToolbar.scss';

const EmployeesToolbar = () => {

    return (
        <section className="employee-filter">
            <h2 className="employee-filter__title">Найти сотрудника</h2>
            <EmployeeSearch />
            <div className="employees-toolbar__controls">
                <EmployeeFilters />
                <EmployeeSort />
            </div>
        </section>
    );
};
 
export default EmployeesToolbar;