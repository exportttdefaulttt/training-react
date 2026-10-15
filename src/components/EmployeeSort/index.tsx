import { ArrowDown, ArrowUp } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
    changeSort,
    selectSortBy,
} from '@/store/slices/filtersSlice';

import './EmployeeSort.scss';

const EmployeeSort = () => {
    const dispatch = useAppDispatch();
    const sortBy = useAppSelector(selectSortBy);

    const handleSort = (direction: 'asc' | 'desc') => {
        dispatch(changeSort(sortBy === direction ? 'none' : direction));
    };

    const sortLabel =
    sortBy === 'asc'
        ? 'Зарплата: по возрастанию'
        : sortBy === 'desc'
          ? 'Зарплата: по убыванию'
          : 'Сортировать по зарплате';
          
    return (
        <div className="employee-sort">
            <span className="employee-sort__label">
                {sortLabel}
            </span>

            <div className="employee-sort__controls">
                <button
                    type="button"
                    className={`employee-sort__button ${
                        sortBy === 'asc'
                            ? 'employee-sort__button--active'
                            : ''
                    }`}
                    aria-label="Сортировать по возрастанию зарплаты"
                    aria-pressed={sortBy === 'asc'}
                    onClick={() => handleSort('asc')}
                >
                    <ArrowUp size={18} aria-hidden="true" />
                </button>

                <button
                    type="button"
                    className={`employee-sort__button ${
                        sortBy === 'desc'
                            ? 'employee-sort__button--active'
                            : ''
                    }`}
                    aria-label="Сортировать по убыванию зарплаты"
                    aria-pressed={sortBy === 'desc'}
                    onClick={() => handleSort('desc')}
                >
                    <ArrowDown size={18} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

export default EmployeeSort;