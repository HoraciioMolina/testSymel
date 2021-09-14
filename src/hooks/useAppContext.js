import React, { useContext, createContext } from "react";

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  //ComponentDidMouunt
  React.useEffect(() => {}, []);

  //
  const values = React.useMemo(
    () => ({
      isLoggedIn, // States que seran visibles en el contexto.
      setIsLoggedIn, // Funciones que son exportadas para manejo externo.
    }),
    [isLoggedIn]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useAppContext;
