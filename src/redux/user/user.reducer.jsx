
const INITIAL_STATE = {
  currentUser: null
//   isLoading: false,
//   error: null,
};
const userReducer = (state =INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
        return {
            ...state,
            currentUser: action.payload
            // isLoading: false,
        };
        // case 'SIGN_OUT_SUCCESS':
        // return {
        //     ...state,
        //     currentUser: null,
        //     isLoading: false,
        // };
        // case 'SIGN_IN_FAILURE':
        // case 'SIGN_OUT_FAILURE':
        // return {
        //     ...state,
        //     error: action.payload,
        //     isLoading: false,
        // };
        default:
        return state;
    }
}

export default userReducer;