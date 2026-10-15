export type SearchQuery = string;

export type SalarySort = 'none' | 'asc' | 'desc';

export type ActiveFilter = 'all' | 'bonus' | 'moreThan1000';

type FilterButton = {
    name: ActiveFilter;
    label: string;
}

export const FILTER_BUTTONS: FilterButton[] = [
    { name: 'all', label: 'Все сотрудникии' },
    { name: 'bonus', label: 'С премией' },
    { name: 'moreThan1000', label: 'Важные' }
]