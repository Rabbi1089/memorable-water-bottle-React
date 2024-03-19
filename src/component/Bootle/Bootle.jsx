import PropTypes from 'prop-types';
import './Bootle.css'
const Bootle = ({bootle, handleAddToCard}) => {
    const {name , img , price } = bootle;

    return (
        <div className="bootle">
            <h3>Bootle : {name}</h3>
            <img src={img}></img>
            <h3>Price : ${price}</h3>
            {/* <button onClick={handleAddToCard}>Purchase</button> 
            to avoid automatic call we need to create a arrow function
            */}
            <button onClick={ () => handleAddToCard(bootle)}>Purchase</button>
            
        </div>
    );
};

Bootle.propTypes = {
    bootle: PropTypes.object.isRequired,
    handleAddToCard: PropTypes.func.isRequired
}

export default Bootle;