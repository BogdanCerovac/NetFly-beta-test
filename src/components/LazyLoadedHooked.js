import React, {useState} from 'react';

import './LazyLoadedHooked.css';

const LazyLoadedHooked = (props) => {

    const [count, setCount] = useState(0);
    return (
        <div className="LazyLoadedHooked">
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
}

export default LazyLoadedHooked;