import { useState, useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { changeQuery } from '@/store/slices/filtersSlice';
import { Search, X } from 'lucide-react';

import './EmployeeSearch.scss';

const EmployeeSearch = () => {

    const [value, setValue] = useState('');

    const dispatch = useAppDispatch();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(changeQuery(value));
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [dispatch, value]);

    return (
        <div className="search-box">
            <Search size={18} className="search-icon" />
            <input value={value} onChange={(event) => setValue(event.target.value)} type="text" placeholder="Введите имя сотрудника..." />
            {
                value && (
                    <button onClick={() => setValue('')} type="button" className="clear-btn" aria-label="Очистить поиск">
                        <X size={18} />
                    </button>
                )
            }
        </div>
    );
};
 
export default EmployeeSearch;