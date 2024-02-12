import React, { ReactNode } from "react";

type ModalProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

export const Modal = ({ modalOpen, setModalOpen, children }: ModalProps) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      {children}
      <button onClick={() => setModalOpen(false)}>✕</button>
    </div>
  );
};
