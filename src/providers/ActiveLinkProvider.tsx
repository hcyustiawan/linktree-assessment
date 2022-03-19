import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ActiveLinkContextProps {
  active: string | null;
  setActive: Dispatch<SetStateAction<string | null>>;
}

const ActiveLinkContext = createContext<ActiveLinkContextProps | undefined>(
  undefined
);

export const ActiveLinkProvider = ({ children }: PropsWithChildren<{}>) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <ActiveLinkContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLinkProvider = () => {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error(
      "useActiveLinkProvider should be used within ActiveLinkProvider"
    );
  }
  return context;
};
