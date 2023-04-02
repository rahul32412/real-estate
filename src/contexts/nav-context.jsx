import { createContext, useState } from "react";

const navContext = createContext();
const NavState = ({ children }) => {
  const [navBg, setnavBg] = useState(true);
  return (
    <navContext.Provider value={{ navBg, setnavBg }}>
      {children}
    </navContext.Provider>
  );
};

export default NavState;
export { navContext };
