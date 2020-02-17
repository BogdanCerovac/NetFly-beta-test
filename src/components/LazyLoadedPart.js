import React from 'react';

import './LazyLoadedPart.scss';

import UserContext from '../contexts/UserContext';

const LazyLoadedPart = () => {

    console.log("LazyLoadedPart rendered");
    
    return(
        <UserContext.Consumer>
        {props => {
          return (
            <div className="LazyLoadedPart">
              <h2>Just showing the context values</h2>
              <p>LazyLoadedPart, user from context: {props.user}</p>
              <p>LazyLoadedPart, counterStartInt from context: {props.counterStartInt}</p>
            </div>
          )
        }}
      </UserContext.Consumer>
    );

};

export default LazyLoadedPart;