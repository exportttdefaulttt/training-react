import { Award, CalendarDays, History, Mail, Pencil, Star, Trash2 } from 'lucide-react';
import clsx from 'clsx';

import './EmployeeCard.scss';

interface Props {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    salary: number;
    isBonus: boolean;
    isImportant: boolean;
    createdAt: string;
    updatedAt?: string;
}

const EmployeeCard = ({ 
    firstName, lastName, email, position, salary, 
    isBonus, isImportant, createdAt, updatedAt
}: Props) => {

    const initials = `${firstName[0]}${lastName[0]}`;

    return (
        <article className={clsx('employee-card', isBonus && 'employee-card--bonus', isImportant && 'employee-card--important')}>

            <div className="employee-main">

                <div className="employee-header">

                    <div className="avatar">
                        {initials}
                    </div>

                    <div className="employee-info">

                        <h3 className="employee-name">
                            {firstName} {lastName}
                        </h3>

                        <p className="employee-position">
                            {position}
                        </p>

                    </div>

                </div>

                <div className="employee-meta">

                    <span className="meta-item">
                        <Mail size={14} />
                        <span className="meta-text">
                            {email}
                        </span>
                    </span>

                    <span className="meta-item">
                        <CalendarDays size={14} />
                        <span className="meta-text">
                            {createdAt}
                        </span>
                    </span>

                    {updatedAt && (
                        <span className="meta-item">
                            <History size={14} />
                            <span className="meta-text">
                                {updatedAt}
                            </span>
                        </span>
                    )}

                </div>

            </div>

            <div className="employee-side">

                <div className="salary-box">
                    <span className="salary-label">
                        Зарплата
                    </span>
                    <span className="salary-value">
                        {salary.toLocaleString('ru-RU')} ₽
                    </span>
                </div>

                <div className="employee-actions">
                    <button type="button" className="reward" aria-label="Выдать премию">
                        <Award size={18} />
                    </button>
                    <button type="button" className="star" aria-label="Важный сотрудник">
                        <Star size={18} />
                    </button>
                    <button type="button" className="edit" aria-label="Редактировать">
                        <Pencil size={18} />
                    </button>
                    <button type="button" className="delete" aria-label="Удалить">
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default EmployeeCard;