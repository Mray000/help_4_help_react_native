import { GetMeData } from "./AuthReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SET_NAVIGATION = "SET_NAVIGATION";

let InintialState = {
  initialized: false,
  isNavigation: true,
};

const AuthReducer = (state = InintialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case SET_NAVIGATION:
      return {
        ...state,
        isNavigation: action.isNavigating,
      };
    default:
      return state;
  }
};

const SetInitial = () => ({
  type: INITIALIZED_SUCCESS,
});

export const SetNavigation = (tf) => ({
  type: SET_NAVIGATION,
  isNavigating: tf,
});

export const Initialing = () => async (dispatch) => {
  let promise1 = dispatch(GetMeData());
  Promise.all([promise1]).then(() => dispatch(SetInitial()));
};

export default AuthReducer;
