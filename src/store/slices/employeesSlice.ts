import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit';
import { createAppSelector } from '../helpers';
import { prepareEmployee } from '@/utils/prepareEmployee';
import { EMPLOYEES, type Employee, type EmployeeBooleanKeys, type EmployeeId } from '@/shared/employee';
import type { RootState } from '..';
import type { Statistics } from '@/shared/statistics';

const employeesAdapter = createEntityAdapter<Employee>();

const initialState = employeesAdapter.addMany(employeesAdapter.getInitialState(), EMPLOYEES);

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: {
			reducer: employeesAdapter.addOne,
			prepare: prepareEmployee,
		},
		removeEmployee: employeesAdapter.removeOne,
		toggleEmployee: (state, action: PayloadAction<{ id: EmployeeId, prop: EmployeeBooleanKeys}>) => {
			const { id, prop } = action.payload;
			employeesAdapter.updateOne(state, {
				id,
				changes: {
					[prop]: !state.entities[id][prop]
				},
			});
		},
		updateEmployee: employeesAdapter.updateOne,
	},
});

export const {
	selectAll: selectAllEmployees,
	selectById: selectEmployeeById
} = employeesAdapter.getSelectors<RootState>(state => state.employees);

export const selectStatistics = createAppSelector(
	[selectAllEmployees],
	(employees): Statistics => {
		const totalEmployees = employees.length;

		const totalImportantEmployees = totalEmployees && employees.filter(employee => employee.isImportant).length;

		const payrollFund = totalEmployees && employees.reduce((sum, currEmployee) => sum + currEmployee.salary, 0);

		const averageSalary = totalEmployees && Math.round(payrollFund / totalEmployees);

		return { totalEmployees, totalImportantEmployees, payrollFund, averageSalary };
	}
);

export const { 
	addEmployee, 
	removeEmployee, 
	toggleEmployee, 
	updateEmployee 
} = employeesSlice.actions;

export type ToggleEmployeePayload = Parameters<typeof toggleEmployee>[0];

export default employeesSlice.reducer;