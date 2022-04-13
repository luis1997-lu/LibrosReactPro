import React, { createContext, useState } from "react";

const initialState = {
  user: null,
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children, authData,id }) => {
  const [userInfo, setUserInfo] = useState(authData);
  const [idlibro, setIdLibro] = useState(id);

  return (
    <GlobalContext.Provider value={{ userInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};
