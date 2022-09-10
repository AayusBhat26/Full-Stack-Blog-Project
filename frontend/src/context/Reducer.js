// in order to update the state of object and other things present in context.js file and applying actions from Actions.js file.

import { LoginFailure, LoginStart, LoginSuccess } from "./Actions";

const Reducer = (state, action)=>{
      switch (action.type) {
        case LoginStart:
          return {
            user: null,
            isfetching: true,
            error: false,
          };
        case LoginSuccess:
          return {
            user:action.payload,
            isfetching: false,
            error: false,
          };
        case LoginFailure:
          return {
            user: null,
            isfetching: false,
            error: true,
          };
        default:
            return {
                  state
            }
          break;
      }
}

export default Reducer;