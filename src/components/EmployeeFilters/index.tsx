import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectActiveFilter, changeActiveFilter } from '@/store/slices/filtersSlice';
import { FILTER_BUTTONS } from '@/shared/filters';

import './EmployeeFilters.scss';

const EmployeeFilters = () => {

    const activeFilter = useAppSelector(selectActiveFilter);

    const dispatch = useAppDispatch();

    const buttons = FILTER_BUTTONS.map(button => {
        const isActive = button.name === activeFilter;
        return (
            <button key={button.name} type="button" className={isActive ? 'active' : undefined} onClick={() => dispatch(changeActiveFilter(button.name))}>
                {button.label}
            </button>
        );
    });

    return (
        <div className="filters">
            {buttons}
        </div>
    );
};
 
export default EmployeeFilters;