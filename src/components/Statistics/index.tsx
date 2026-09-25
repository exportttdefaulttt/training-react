import { STATISTICS_CARDS, type Statistics as StatisticsConfig } from '@/shared/statistics';
import StatisticsCard from '@/components/StatisticsCard';

import './Statistics.scss';

const Statistics = () => {

    const statistics: StatisticsConfig = {
        totalEmployees: 5,
        totalImportantEmployees: 2,
        payrollFund: 250000,
        averageSalary: 0,
    };

    return (
        <div className="statistics">
            {
                STATISTICS_CARDS.map(({key, ...props}) => (
                    <StatisticsCard
                        key={key}
                        {...props}
                        value={statistics[key]}
                    />
                ))
            }
        </div>
    );
};

export default Statistics;