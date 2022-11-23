import React, { useContext, useState } from "react";

const SuccesContext = React.createContext();

export function useSuccessContext() {
  return useContext(SuccesContext);
}

export function SuccessProvider({ children }) {
  const [success, setSuccess] = useState("");
  const [fail, setFail] = useState("");

  return (
    <SuccesContext.Provider value={{ success, fail, setSuccess, setFail }}>
      {children}
    </SuccesContext.Provider>
  );
}
