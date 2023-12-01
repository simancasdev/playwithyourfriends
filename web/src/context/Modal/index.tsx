import {Children} from "interfaces";
import {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
  CSSProperties,
} from "react";

export type ModalConfig = {containerStyle: CSSProperties};

const DEFAULT_MODAL_CONFIG: ModalConfig = {containerStyle: {}};

type IContext = {
  config: ModalConfig;
  onClose: () => void;
  element: JSX.Element | undefined;
  openModal: (element: JSX.Element, config?: ModalConfig) => void;
};

const Context = createContext<IContext>({
  onClose: () => {},
  element: undefined,
  openModal: () => {},
  config: DEFAULT_MODAL_CONFIG,
});

export const useModal = () => useContext(Context);

interface ModalProviderProps extends Children {}

export const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [element, setElement] = useState<JSX.Element | undefined>();
  const [config, setConfig] = useState<ModalConfig>({containerStyle: {}});

  const openModal = useCallback(
    (element: JSX.Element, config: ModalConfig = DEFAULT_MODAL_CONFIG) => {
      setElement(element);
      setConfig(config);
    },
    []
  );

  const onClose = useCallback(() => {
    setElement(undefined);
    setConfig(DEFAULT_MODAL_CONFIG);
  }, []);

  const values = useMemo<IContext>(
    () => ({element, config, openModal, onClose}),
    [element, config]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
