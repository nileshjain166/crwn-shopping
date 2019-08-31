export const addItemToCart = (cartItems, cartItmeToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItmeToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItmeToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        )
    }
    return [...cartItems, { ...cartItmeToAdd, quantity: 1 }]
}