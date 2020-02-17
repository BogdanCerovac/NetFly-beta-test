import React, {useState, useContext} from 'react';

import './LazyLoadedHooked.css';

import { UserConsumer } from '../contexts/UserContext';

const LazyLoadedHooked =  ({props}) => {

    const contextValue = useContext(UserConsumer);
    console.log("LazyLoadedHooked contextValue", contextValue);

    const defaultLocal = 0;

    const initialCount = (contextValue) ? contextValue.counterStartInt : defaultLocal;

    const [count, setCount] = useState(initialCount);
    return (

        <div className="LazyLoadedHooked">
            {initialCount !== defaultLocal &&
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