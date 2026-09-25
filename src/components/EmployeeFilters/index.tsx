import './EmployeeFilters.scss';

const EmployeeFilters = () => {

    let filter = 'all';
    return (
        <div className="filters">
            <button type="button"
                className={
                    filter === 'all'
                        ? 'active'
                        : ''
                }
            >
                Все сотрудники
            </button>

            <button
                type="button"
                className={
                    filter === 'bonus'
                        ? 'active'
                        : ''
                }
            >
                С премией
            </button>

            <button
                type="button"
                className={
                    filter === 'salary'
                        ? 'active'
                        : ''
                }
            >
                Выше средней З/П
            </button>

        </div>
    );
};
 
export default EmployeeFilters;