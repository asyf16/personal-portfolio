import { createContext, useRef,useContext } from "react";
import PropTypes from "prop-types";

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const experienceRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ experienceRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useScroll = () => useContext(ScrollContext);

export default useScroll;