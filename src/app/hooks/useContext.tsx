import { SetStateAction, createContext, Dispatch } from "react";

interface LayoutContextProps {
  isCollapsed: boolean; // undefined, because I assume there's no initial value for country
  setIsCollapsed?: Dispatch<SetStateAction<boolean>> | undefined; // You could also pass a setter if needed.
}

export const LayoutContext = createContext<LayoutContextProps>({
  isCollapsed: false,
  setIsCollapsed: () => {},
});
