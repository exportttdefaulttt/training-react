export const formatMoney = (value: number): string => {
    return value ? `${value.toLocaleString('ru-RU')} ₽` : '—';
};