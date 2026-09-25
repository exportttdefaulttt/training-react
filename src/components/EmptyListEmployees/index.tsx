import { Users, SearchX } from 'lucide-react';

import './EmptyListEmployees.scss';

const EmptyListEmployees = () => {

    const isEmpty = false;

    const icon = isEmpty ? <Users size={48} strokeWidth={1.8} /> : <SearchX size={48} strokeWidth={1.8} />;
    const title = isEmpty ? 'Пока нет сотрудников' : 'Ничего не найдено';
    const description = isEmpty ? 'Добавьте первого сотрудника, чтобы начать работу' : 'Попробуйте изменить фильтры или поисковый запрос';

    return (
        <div className="empty-state">
           {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default EmptyListEmployees;