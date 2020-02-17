import React, { Suspense } from 'react';

const LazyLoadedPart = React.lazy(() => import(/* webpackChunkName: "LazyLoadedPart" */  './LazyLoadedPart'));

const MainApp = ({props}) => {
    //const user = useContext(UserContext);
    return(
        <div className="main-app">
            <h2>Main app, loading children async;</h2>
            {props}
            <Suspense fallback={'Loading LazyLoadedPart...'}>
                <LazyLoadedPart />
            </Suspense>
        </div>
    );

};

export default MainApp;