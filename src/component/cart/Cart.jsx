import PropTypes from 'prop-types'; 
import './cart.css'
const Cart = ({cart, handleRemoveToCart}) => {
    return (
        <div>
            <h3>Bottle in cart : {cart.length}</h3>
            <div className="cart-container">
               {cart.map(bootle => <div key={bootle.id} >
                <img src={bootle.img}></img>
                <button onClick={() => handleRemoveToCart(bootle.id)}>Remove</button>
               </div>)}
               {/* {cart.map(bootle => <img key={bootle.id} src={bootle.img}></img>)} */}
            </div>
        </div>
    );
};


Cart.propTypes = {
    Cart: PropTypes.array.isRequired,
    handleRemoveToCart : PropTypes.func.isRequired
}

export default Cart;