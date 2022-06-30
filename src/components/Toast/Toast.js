import React, { useEffect } from "react";
import "./Toast.scss";

const Toast = ({ toastMessage, setToastMessage }) => {
  useEffect(() => {
    if (toastMessage.length > 0) {
      setTimeout(() => {
        setToastMessage([]);
      }, 2000);
    }
  }, [toastMessage]);

  if (toastMessage.length < 1) {
    return null;
  }

  return (
    <div className="toast">
      <p className="imoji"> {toastMessage[1]}</p>
      {toastMessage[0]}
    </div>
  );
};

export default Toast;
