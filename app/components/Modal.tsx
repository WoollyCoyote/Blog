import React from "react";
export const Modal = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <button onClick={() => setModalOpen(false)}>✕</button>
      {children}
    </div>
  );
};
