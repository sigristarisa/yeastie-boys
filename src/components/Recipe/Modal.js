const Modal = ({ children, showSave }) => {
  if (!showSave) return null;
  return <div>{children}</div>;
};

export default Modal;
