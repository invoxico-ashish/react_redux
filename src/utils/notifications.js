import toast from 'react-hot-toast';
export const successToast = (message, type) => {
    return toast.success(`${message}`);
};