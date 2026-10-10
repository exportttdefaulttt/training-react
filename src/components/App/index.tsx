import { ToastProvider } from '@/context/ToastContext';
import Header from '@/components/Header';
import EmployeesToolbar from '@/components/EmployeesToolbar';
import EmployeesList from '@/components/EmployeesList';
import AddEmployeeForm from '@/components/AddEmployeeForm';

const App = () => {
    
    return (
        <div className="app">
            <Header />
            <EmployeesToolbar />
            <ToastProvider>
                <EmployeesList />
                <AddEmployeeForm />
            </ToastProvider>
        </div>
    );
};
 
export default App;