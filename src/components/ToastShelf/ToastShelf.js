import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, closeToast }) {
  return (
    <ol className={styles.wrapper}
    role="region"
    aria-live="polite"
    aria-label="Notification"
    >
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast id={toast.id} message={toast.message} variant={toast.variant} handleClose={closeToast} />
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
