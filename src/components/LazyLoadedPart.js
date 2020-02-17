import React from 'react';

import { UserConsumer } from '../contexts/UserContext';

const LazyLoadedPart = ({props}) => {
    
    return(

        <UserConsumer>
        {props => {
          return <div className="LazyLoadedPart"><h2>LazyLoadedPart, prop from context: {props.name}</h2></div>
        }}
      </UserConsumer>
        
    );

};

export default LazyLoadedPart;