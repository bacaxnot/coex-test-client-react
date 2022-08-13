import '@styles/quantitySelector.sass'
import React, {useState} from 'react';

const QuantitySelector = () => {
    const [counter, setCounter] = useState(1) 

    return (
        <div className="quantity-selector">
            <span
                className="quantity-selector-btn"
                onClick={()=>{setCounter(counter - 1 > 0 ? counter - 1 : 0)}}>
                -
            </span>
            <span className="quantity-selector-btn">
                {counter}
            </span>
            <span
                className="quantity-selector-btn"
                onClick={()=>{setCounter(counter + 1)}}>
                +
            </span>
        </div>
    );
};

export default QuantitySelector;