import {createContext, useContext} from "react";

export const TabContext = createContext()
export const useTab = () => useContext(TabContext)
