export type ToastType = 'success' | 'error';

export interface ToastMessage {
    id: number;
    title: string;
    message: string;
    type: ToastType;
}