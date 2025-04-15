import CartActionTypes  from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer;