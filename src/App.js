import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';





function App() {

  //The states

  const [amount, saveAmount] = useState(0);
  const [due, saveDue] = useState('');
  const [total, saveTotal] = useState(0);
  const [loading, saveLoad] = useState(false)


  let component;
  if (loading) {
    component = <Spinner></Spinner>
    
  }else if (total === 0) {
    component = <Message></Message>
  } else {
    component =
      <Result
        total={total}
        due={due}
        amount={amount}
      >

      </Result>
  }

  return (
    <Fragment>

      <Header tittle="Lean tutorial" />
      <div className="container">

        <Form
          amount={amount}
          saveAmount={saveAmount}
          due={due}
          saveDue={saveDue}
          saveTotal={saveTotal}
          saveLoad ={saveLoad}
        ></Form>
        <div className="mensajes">
          {component}

        </div>

      </div>

    </Fragment>
  );
}

export default App;
