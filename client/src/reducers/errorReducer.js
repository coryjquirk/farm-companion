import { GET_ERRORS } from "../actions/types";
const initialState = {};
//////they didn't have a name on this errorReducer function in the documentation https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82
export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}