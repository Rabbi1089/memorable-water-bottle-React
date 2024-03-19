import { useEffect } from "react";
import { useState } from "react";
import Bootle from "../Bootle/Bootle";
import './Bootles.css'
import { addTols, getStoredCart, removeFromLs } from "../Utilites/LocalStroage";
import Cart from "../cart/Cart";


const Bootles = () => {

    const [Bootles, setBootles] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBootles(data))

    },[]);

    useEffect(() => {
        //console.log('called the bootle effect' , Bootle.length)
        if(Bootle.length > 0 )
        {
            const StoredCart = getStoredCart();
            const savedCart = [];
            //console.log(StoredCart);
            for(const id of StoredCart){
                const bottole = Bootles.find(bootle => bootle.id === id)
            if(bottole){
                savedCart.push(bottole)
            }
            
            }
            console.log('saved cart', savedCart)
       
        setCart(savedCart)

        }

    },[Bootles])

    const handleAddToCard = bootle =>{
        const newCart = [...cart , bootle]
        setCart(newCart);
        addTols(bootle.id);
    }

    const handleRemoveToCart = id => {
        //visual cart remove
        const remainingCart = cart.filter(bootle => bootle.id !== id)
        setCart(remainingCart)
        //remove from local stroage
        removeFromLs(id)
    }


    return (
        <div>
            <h4>Bootle available : {Bootles.length}</h4>
            <Cart cart={cart} handleRemoveToCart= {handleRemoveToCart}></Cart>
            {/* <h3>Bottle in cart : {cart.length}</h3> */}
            <div className="bootle-container">
            {
                Bootles.map(bottle =><Bootle 
                    key={bottle.id} bootle={bottle} 
                    handleAddToCard={handleAddToCard}></Bootle>)
            }
            </div>
            
        </div>
    );
};



export default Bootles;