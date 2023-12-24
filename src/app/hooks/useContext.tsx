import { SetStateAction, createContext, Dispatch } from "react";

interface LayoutContextProps {
  isCollapsed: boolean;
  setIsCollapsed?: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext = createContext<LayoutContextProps>({
  isCollapsed: false,
  setIsCollapsed: () => {},
});
