// import { useEffect } from 'react';
// import { CheckCircle, XCircle, X } from 'lucide-react';

// import type { ToastMessage } from '@/shared/toast';

// import './Toast.scss';

// interface ToastProps {
//     toast: ToastMessage;
//     onClose: (id: number) => void;
// }

// const Toast = ({ toast, onClose }: ToastProps) => {
//     const { id, title, message, type } = toast;

//     useEffect(() => {
//         const timeoutId = setTimeout(() => {
//             onClose(id);
//         }, 6000);

//         return () => clearTimeout(timeoutId);
//     }, [id, onClose]);

//     const Icon = type === 'success' ? CheckCircle : XCircle;

//     return (
//         <div
//             className={`toast toast--${type}`}
//             role="status"
//         >
//             <Icon className="toast__icon" size={24} />

//             <div className="toast__content">
//                 <h3 className="toast__title">{title}</h3>
//                 <p className="toast__message">{message}</p>
//             </div>

//             <button
//                 type="button"
//                 className="toast__close"
//                 aria-label="Закрыть уведомление"
//                 onClick={() => onClose(id)}
//             >
//                 <X size={18} />
//             </button>

//             <div className="toast__progress" />
//         </div>
//     );
// };

// export default Toast;

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

import { type ToastMessage } from '@/shared/toast';

import './Toast.scss';

interface ToastProps {
    toast: ToastMessage;
    onClose: (id: number) => void;
}

const EXIT_DURATION = 300;
const TOAST_DURATION = 6000;

const Toast = ({ toast, onClose }: ToastProps) => {
    const { id, title, message, type } = toast;
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const exitTimeoutId = setTimeout(() => {
            setIsExiting(true);
        }, TOAST_DURATION);

        const removeTimeoutId = setTimeout(() => {
            onClose(id);
        }, TOAST_DURATION + EXIT_DURATION);

        return () => {
            clearTimeout(exitTimeoutId);
            clearTimeout(removeTimeoutId);
        };
    }, [id, onClose]);

    const Icon = type === 'success' ? CheckCircle : XCircle;

    const handleClose = () => {
        setIsExiting(true);

        setTimeout(() => {
            onClose(id);
        }, EXIT_DURATION);
    };

    return (
        <div
            className={`toast toast--${type} ${isExiting ? 'toast--exit' : ''}`}
            role="status"
        >
            <Icon className="toast__icon" size={24} />

            <div className="toast__content">
                <h3 className="toast__title">{title}</h3>
                <p className="toast__message">{message}</p>
            </div>

            <button
                type="button"
                className="toast__close"
                aria-label="Закрыть уведомление"
                onClick={handleClose}
            >
                <X size={18} />
            </button>

            <div className="toast__progress" />
        </div>
    );
};

export default Toast;