import { useAppSelector } from '@/store/hooks';
import { selectStatistics } from '@/store/slices/employeesSlice';
import { STATISTICS_CARDS } from '@/shared/statistics';
import StatisticsCard from '@/components/StatisticsCard';

import './Statistics.scss';

const Statistics = () => {

    const statistics = useAppSelector(selectStatistics);

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