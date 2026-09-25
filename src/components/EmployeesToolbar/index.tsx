import EmployeeSearch from '@/components/EmployeeSearch';
import EmployeeFilters from '@/components/EmployeeFilters';

import './EmployeesToolbar.scss';

const EmployeesToolbar = () => {

    return (
        <section className="employee-filter">
            <h2 className="employee-filter__title">Найти сотрудника</h2>
            <EmployeeSearch />
            <EmployeeFilters />
        </section>
    );
};
 
export default EmployeesToolbar;