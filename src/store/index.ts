import { configureStore } from '@reduxjs/toolkit';
import { employeesReducer, filtersReducer } from '@/store/reducers';

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;