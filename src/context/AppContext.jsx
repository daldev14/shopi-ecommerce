import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import PropTypes from "prop-types";

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [account, setAccount] = useLocalStorage("ACCOUNT", {});
  const [signOut, setSignOut] = useLocalStorage("SIGN-OUT", false);

  const toggleSignOut = () => setSignOut(!signOut);

  const userIsLoggedIn =
    Object.keys(account).length !== 0 && signOut ? true : false;

  const createAccount = ({ name, email, password }) => {
    const userAccount = {
      name,
      email,
      password,
    };

    setAccount(userAccount);
  };

  return (
    <AppContext.Provider
      value={{
        account,
        setAccount,
        signOut,
        setSignOut,
        toggleSignOut,
        createAccount,
        userIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
