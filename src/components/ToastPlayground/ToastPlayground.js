import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast';
import useToggle from '../../hooks'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const initVarian = "notice"
  const [textInput, setTextInput] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState(initVarian);
  const [isOpened, toggle, setIsOpened] = useToggle(false);

  function handleCloseToast() {
    setIsOpened(false)
  }

  React.useEffect(() => { console.log(textInput, toastVariant) }, [toastVariant, textInput])

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {isOpened && <Toast type={toastVariant} handleDismiss={handleCloseToast}>{textInput}</Toast>}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={textInput} onChange={(e) => setTextInput(e.target.value)} />
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
            <Button onClick={() => setIsOpened(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
