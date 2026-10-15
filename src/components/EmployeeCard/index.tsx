import { memo } from 'react';
import { Award, CalendarDays, History, Mail, Pencil, Star, Trash2 } from 'lucide-react';
import clsx from 'clsx';
import { formatMoney } from '@/utils/formatMoney';
import { formatDate } from '@/utils/formatDate';

import type { Employee, EmployeeId } from '@/shared/employee';
import type { ToggleEmployeePayload } from '@/store/slices/employeesSlice';

import './EmployeeCard.scss';

interface Props extends Employee {
    onRemove: (id: EmployeeId) => void;
    onToggle: (payload: ToggleEmployeePayload) => void;
    onOpenModal: (id: EmployeeId) => void;
};

const EmployeeCard = memo(({ 
    id, firstName, lastName, email, position, salary, isBonus, 
    isImportant, createdAt, updatedAt, onRemove, onToggle, onOpenModal
}: Props) => {

    const articleClasses = clsx('employee-card', isBonus && 'employee-card--bonus', isImportant && 'employee-card--important');

    const initials = `${firstName[0]}${lastName[0]}`;

    const formatedSalary = formatMoney(salary);

    return (
        <article className={articleClasses}>

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
                            {formatDate(createdAt)}
                        </span>
                    </span>

                    {updatedAt && (
                        <span className="meta-item">
                            <History size={14} />
                            <span className="meta-text">
                                {formatDate(updatedAt)}
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
                        {formatedSalary}
                    </span>
                </div>

                <div className="employee-actions">
                    <button onClick={() => onToggle({ id, prop: 'isBonus' })} type="button" className="reward" aria-label="Выдать премию">
                        <Award size={18} />
                    </button>
                    <button onClick={() => onToggle({ id, prop: 'isImportant' })} type="button" className="star" aria-label="Важный сотрудник">
                        <Star size={18} />
                    </button>
                    <button onClick={() => onOpenModal(id)} type="button" className="edit" aria-label="Редактировать">
                        <Pencil size={18} />
                    </button>
                    <button onClick={() => onRemove(id)} type="button" className="delete" aria-label="Удалить">
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </article>
    );
});

export default EmployeeCard;