import React from 'react';


const Result = ({ amount, due, total }) => {
    return (
        <div className="u-full-width resultado">
            <h2>Sumary</h2>
            <p>Requested quantity: $ {amount}</p>
            <p>Due: {due} months</p>
            <p>Your monthly payment is as follows: $ { (total / due).toFixed(2) }</p>
            <p>Total to pay: $ {(total).toFixed()}</p>

        </div>
    );
}

export default Result;