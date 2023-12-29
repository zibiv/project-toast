import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleCloseToast }) {
  console.log("Render")
  return (
    <ol className={styles.wrapper}>
      {toasts.map(element => {
        return (
          <li key={element.id} className={styles.toastWrapper}>
            <Toast
              id={element.id}
              type={element.toastVariant}
              handleDismiss={handleCloseToast}>
              {element.textInput}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
