import Header from '@/components/Header';
import EmployeesToolbar from '@/components/EmployeesToolbar';
import EmployeesList from '@/components/EmployeesList';
import AddEmployeeForm from '@/components/AddEmployeeForm';

const App = () => {
    
    return (
        <div className="app">
            <Header />
            <EmployeesToolbar />
            <EmployeesList />
            <AddEmployeeForm />
        </div>
    );
};
 
export default App;