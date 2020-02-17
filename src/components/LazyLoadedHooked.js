import React, {useState, useContext, useEffect} from 'react';

import './LazyLoadedHooked.css';

import UserContext from '../contexts/UserContext';

const LazyLoadedHooked =  ({props}) => {

    const contextValue = useContext(UserContext.Consumer);
    console.log("LazyLoadedHooked contextValue", contextValue);

    const defaultLocal = 0;

    let initialCountDyn = (contextValue.counterStartInt) ? contextValue.counterStartInt : defaultLocal;

    const [count, setCount] = useState(contextValue.counterStartInt);

    const [initialCount, setInitialCount] = useState(initialCountDyn);


    useEffect(
        () => {
            setCount(parseInt(contextValue.counterStartInt))
          return () => {
            setInitialCount(0);
          };
        },
        [contextValue.counterStartInt],
    );

    return (

        <div className="LazyLoadedHooked">
            <h2>Internal state that can be changed from context</h2>
            {initialCount.current !== defaultLocal &&
                <p>Initial count set from context to {count} times</p>
            }
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default LazyLoadedHooked;