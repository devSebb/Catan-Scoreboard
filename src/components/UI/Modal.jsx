import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import AuthInputs from './AuthInputs'; // Import the AuthInputs component

export default function Modal({ children, open, onClose, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
      {open && <AuthInputs />}{' '}
      {/* Conditionally render AuthInputs when the modal is open */}
    </dialog>,
    document.getElementById('modal')
  );
}
