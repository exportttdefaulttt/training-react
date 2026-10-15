import { createAppSelector } from "./helpers";
import { selectAllEmployees } from "./slices/employeesSlice";
import { selectSearchQuery, selectSortBy } from "./slices/filtersSlice";

export const selectFilteredEmployeesBySearchQuery = createAppSelector(
    [selectAllEmployees, selectSearchQuery],
    (employees, query) => {
        return employees.filter(employee => {
            const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
            return fullName.includes(query);
        });
    }
);

export const selectSortedEmployees = createAppSelector(
    [selectAllEmployees, selectSortBy],
    (employees, sortBy) => {
        if (sortBy === 'none') {
            return employees;
        }

        return [...employees].sort((a, b) => {
            if (sortBy === 'asc') {
                return a.salary - b.salary;
            }

            return b.salary - a.salary;
        });
    },
);