import type { StatisticsCardConfig } from '@/shared/statistics';

import './StatisticsCard.scss';

interface StatisticsCardProps extends StatisticsCardConfig {
    value: number;
}

const StatisticsCard = ({ title, value, IconComponent, iconClassName, formatter }: StatisticsCardProps) => {

    return (
        <div className="stat-card">
            <div className="stat-card__header">
                <span>{title}</span>
                <IconComponent className={iconClassName} size={20} />
            </div>

            <strong>{formatter ? formatter(value) : value}</strong>
        </div>
    );
};
 
export default StatisticsCard;