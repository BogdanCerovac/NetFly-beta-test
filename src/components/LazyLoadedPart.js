import React from 'react';

import './LazyLoadedPart.css';

import UserConsumer from '../contexts/UserContext';

const LazyLoadedPart = () => {
    
    return(
        <UserConsumer>
        {props => {
          return (
            <div className="LazyLoadedPart">
              <h2>Just showing the context values</h2>
              <p>LazyLoadedPart, user from context: {props.user}</p>
              <p>LazyLoadedPart, counterStartInt from context: {props.counterStartInt}</p>
            </div>
          )
        }}
      </UserConsumer>
    );

};

export default LazyLoadedPart;