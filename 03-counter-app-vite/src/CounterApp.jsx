import PropTypes from 'prop-types';
import { useState } from 'react';

 // function handleAdd( event, newValue){
    //     //console.log(event)
    //     console.log(newValue);
    // }

    //misma funcion pero en funcion flecha:
    // const handleAdd = (event, newValue) =>{
    //     console.log(newValue);
    // }

export const CounterApp = ({value}) => {

    //console.log('render');

    const [ counter, setCounter ] = useState(0);

    const handleAdd = () =>{
        // setCounter(counter+1);
        setCounter((c) => c + 1);
    }
    const handleSub = () =>{
        // setCounter(counter+1);
        setCounter((c) => c - 1);
    }
    const handleReset = () =>{
        // setCounter(counter+1);
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSub }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    );
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired,
}
