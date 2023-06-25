import React from "react";
import ToastShelf from '../ToastShelf/ToastShelf';
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    const dismissedToasts = [];
    setToasts(dismissedToasts);
  },[]);

  useEscapeKey(handleEscape)

  function addToast(message, variant) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant: message===''?'notice':variant
    };
    const newToasts = [
      ...toasts,
      newToast
    ];
    setToasts(newToasts);
  }

  function removeToast(id) {
    const idx = toasts.findIndex((t) => t.id === id);
    const newToasts = [...toasts];
    newToasts.splice(idx,1);
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider
      value={{ addToast }}
    >
      <ToastShelf toasts={toasts} closeToast={removeToast}/>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
