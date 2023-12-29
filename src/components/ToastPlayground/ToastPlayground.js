import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast';
import useToggle from '../../hooks'
import ToastShelf from '../ToastShelf/ToastShelf.js';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const initVarian = "notice"
  const [textInput, setTextInput] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState(initVarian);
  const [toasts, setToasts] = React.useState([]);


  function handleCloseToast(id) {
    setToasts(prev => {
      const updatedToasts = prev.filter(element => element.id !== id)
      return updatedToasts
    })
  }

  const memoidedHandleCloseToast = React.useCallback(handleCloseToast, [toasts])

  function handlePopToast(e) {
    e.preventDefault()
    const updatedToasts = [...toasts, {
      textInput,
      toastVariant,
      id: crypto.randomUUID()
    }]
    setToasts(updatedToasts)
    setTextInput("")
    setToastVariant(initVarian)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} handleCloseToast={memoidedHandleCloseToast} />
      <form className={styles.controlsWrapper} onSubmit={(e) => handlePopToast(e)}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={textInput} onChange={(e) => setTextInput(e.target.value)} required />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => {
              const id = `variant-${variant}`
              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={toastVariant === variant}
                    onChange={() => setToastVariant(variant)}
                  />
                  {variant}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
