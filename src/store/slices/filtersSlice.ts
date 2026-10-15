import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SearchQuery, ActiveFilter, SalarySort } from '@/shared/filters';

interface FiltersState {
    query: SearchQuery;
    activeFilter: ActiveFilter;
    sortBy: SalarySort;
}

const initialState: FiltersState = {
    query: '',
    activeFilter: 'all',
    sortBy: 'none',
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
        changeQuery: {
            reducer: (state, action: PayloadAction<SearchQuery>) => {
                state.query = action.payload;
            },
            prepare: (searchQuery: SearchQuery) => {
                return {
                    payload: searchQuery.trim().toLowerCase()
                };
            },
        },
        changeSort: (state, action: PayloadAction<SalarySort>) => {
            state.sortBy = action.payload;
        },
        changeActiveFilter: (state, action: PayloadAction<ActiveFilter>) => {
            state.activeFilter = action.payload;
        }
    },
    selectors: {
        selectSearchQuery: (state) => state.query,
        selectActiveFilter: (state) => state.activeFilter,
        selectSortBy: (state) => state.sortBy,
    },
});

export const { changeQuery, changeSort, changeActiveFilter } = filtersSlice.actions;

export const { selectSearchQuery, selectActiveFilter, selectSortBy } = filtersSlice.selectors;

export default filtersSlice.reducer;