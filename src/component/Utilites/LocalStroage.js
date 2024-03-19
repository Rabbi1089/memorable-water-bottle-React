const getStoredCart = () => {
    const storedCardString = localStorage.getItem('cart')
    if(storedCardString){
        return JSON.parse(storedCardString)
    }return [];
}
const saveCartToLS = cart => {
    const cartStringfied = JSON.stringify(cart)
    localStorage.setItem('cart' , cartStringfied);
}

const addTols = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);

}

const removeFromLs = id =>{
    const cart = getStoredCart();
    //reaming every ud
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);

}

export {addTols, getStoredCart, removeFromLs}