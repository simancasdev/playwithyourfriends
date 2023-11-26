import {Children} from "interfaces";
import {useMemo, useContext, createContext, useCallback, useState} from "react";

type IContext = {
  element: JSX.Element | undefined;
  openModal: (element: JSX.Element) => void;
};

const Context = createContext<IContext>({
  element: undefined,
  openModal: () => {},
});

export const useModal = () => useContext(Context);

interface ModalProviderProps extends Children {}

export const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [element, setElement] = useState<JSX.Element | undefined>();

  const openModal = useCallback((element: JSX.Element) => {
    setElement(element);
  }, []);

  const values = useMemo<IContext>(() => ({element, openModal}), [element]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
