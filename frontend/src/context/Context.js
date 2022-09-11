import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
const INITIAL_STATE = {
  // user: null, // when we are visiting the page, there would no user unitl logged in.

  // initially i hard coded it, but now i will set the user as localStorage.
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE); // 2nd parameter will indicate which state are we updating.



  // in order to store the data in localstorage, so that there would be some data present even after the user reloads the page.
  useEffect(() => {
    // setItem of locaalStorage  takes an json object.
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user])
  // whenever the state of the user changes (i.e. the value of user)


  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
