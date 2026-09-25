import { Users, UserStar, Wallet, TrendingUp, type LucideIcon } from 'lucide-react';
import { formatMoney } from '@/utils/formatMoney';

type StatisticsKeys = 'totalEmployees' | 'totalImportantEmployees' | 'payrollFund' | 'averageSalary';

export type Statistics = Record<StatisticsKeys, number>;

export type StatisticsCardConfig = {
    key: StatisticsKeys;
    title: string;
    IconComponent: LucideIcon;
    iconClassName: string;
    formatter?: (value: number) => string;
}

export const STATISTICS_CARDS: StatisticsCardConfig[] = [
    { 
        key: 'totalEmployees', 
        title: 'Сотрудников', 
        IconComponent: Users, 
        iconClassName: 'employees-icon',
    },
    { 
        key: 'totalImportantEmployees', 
        title: 'Важные', 
        IconComponent: UserStar, 
        iconClassName: 'important-icon',
    },
    { 
        key: 'payrollFund', 
        title: 'Фонд оплаты', 
        IconComponent: Wallet, 
        iconClassName: 'salary-icon',
        formatter: formatMoney,
    },
    { 
        key: 'averageSalary', 
        title: 'Средняя З/П', 
        IconComponent: TrendingUp, 
        iconClassName: 'average-icon',
        formatter: formatMoney,
    },
];