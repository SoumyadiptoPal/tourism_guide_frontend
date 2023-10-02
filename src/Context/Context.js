import { createContext } from "react";

const Context = createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    login: () => {},
    logout: () => {}
});

export default Context;