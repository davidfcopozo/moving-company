import { useState } from "react";

const useModal = (initialValue) => {
  const [isOpen, setIsOpen] = useState((initialValue = false));

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return [isOpen, closeModal, openModal];
};

export default useModal;
