import { CartActionTypes } from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.util'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems, actions.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== actions.payload.id
                )
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, actions.payload) 
            }
        default:
            return state
    }
}

export default cartReducer;