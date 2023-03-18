import { useContext } from "react";
import { ThemeContext } from "../services/context/CoreContext";

export default function useThemeProps() {
  const context = useContext(ThemeContext);
  return context;
}