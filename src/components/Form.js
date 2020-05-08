import React, { useState, Fragment } from 'react';
import { calculateTotal } from '../helpers';



const Form = (props) => {

    const { amount, saveAmount, due, saveDue, saveTotal, saveLoad } = props;

    // Local state

    const [error, saveError] = useState(false);



    function readAmount(event) {
        console.log('I am readind the amount');
        saveAmount(parseInt(event.target.value));


    }
    function readDue(event) {
        console.log('This is the dropdown select');
        saveDue(parseInt(event.target.value));

    }

    function calculateDue(event) {
        console.log('Submiting form');
        event.preventDefault();

        //Validate
        if (amount <= 0 || due === '') {
            console.log('There is an error');
            saveError(true);
            return;

        }
        saveError(false);

        // Enable spinner

        saveLoad(true);

        setTimeout(() => {

            // Due
            const total = calculateTotal(amount, due)

            // save total

            saveTotal(total);
            saveLoad(false);

        }, 3000);




    }


    return (
        <Fragment>

            <form onSubmit={calculateDue}>

                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={readAmount}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={readDue}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calculate"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>


            {(error) ? <p className="error"> All fields are required </p> : null}

        </Fragment>
    );
}

export default Form;