import { Search, X } from 'lucide-react';

import './EmployeeSearch.scss';

const EmployeeSearch = () => {

    return (
        <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Введите имя сотрудника..." />
            <button type="button" className="clear-btn" aria-label="Очистить поиск">
                <X size={18} />
            </button>
        </div>
    );
};
 
export default EmployeeSearch;