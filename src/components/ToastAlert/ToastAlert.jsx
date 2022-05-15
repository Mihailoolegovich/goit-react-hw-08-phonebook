import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const option = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export function toastSuccess(message) {
  toast.success(message, option);
}
export function toastInfo(message) {
  toast.info(message, option);
}
export function toastError(message) {
  toast.error(message, option);
}
