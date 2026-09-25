import { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

import './Modal.scss';

interface ModalProps {
    title: string;
    children: React.ReactNode;
}

const Modal = ({ title, children }: ModalProps) => {

    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => { 
            document.body.style.overflow = ''; 
        }
    }, []);

    return createPortal(
        <div className="modal">
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2>{title}</h2>

                    <button
                        type="button"
                        className="modal-close"
                    >
                        <X size={18}  strokeWidth={3}/>
                    </button>
                </div>

                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;