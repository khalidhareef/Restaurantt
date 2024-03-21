import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ handleClose, show, children }) => {
 
  const dialog = React.useRef();

 
  React.useEffect(() => {
    if (show) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [show]);

 
  const handleCancel = (event) => {
    if (event.target === dialog.current) {
      handleClose();
    }
  };

  
  return ReactDOM.createPortal(
    <dialog ref={dialog} onClick={handleCancel}>
      {children}
      <button onClick={handleClose}>Close</button>
    </dialog>,
    document.body
  );
};

export default Modal;
