import {
    createContext,
    useMemo,
    useCallback,
    useState,
    type ReactNode,
} from 'react';
import Toast from '@/components/Toast';
import type { ToastMessage, ToastType } from '@/shared/toast';

interface ToastContextValue {
    showToast: (title: string, message: string, type?: ToastType) => void;
    removeToast: (id: number) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const showToast = useCallback((title: string, message: string, type: ToastType = 'success') => {
        const id = Date.now() + Math.random();

        setToasts(toasts => [...toasts, { id, title, message, type }]);
    }, []);

    const removeToast = useCallback((id: number) => {
        setToasts(toasts => toasts.filter(toast => toast.id !== id));
    }, []);

    const value: ToastContextValue = useMemo(() => ({
        showToast,
        removeToast
    }), []);

    return (
        <ToastContext.Provider value={value}>
            {children}

            <div className="toast-container">
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        toast={toast}
                        onClose={removeToast}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};