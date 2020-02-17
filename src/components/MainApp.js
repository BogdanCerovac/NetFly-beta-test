import React, { Suspense } from 'react';

const LazyLoadedPart = React.lazy(() => import(/* webpackChunkName: "LazyLoadedPart" */ './LazyLoadedPart'));
const LazyLoadedHooked = React.lazy(() => import(/* webpackChunkName: "LazyLoadedHooked" */ './LazyLoadedHooked'));

const MainApp = ({props}) => {
    //const user = useContext(UserContext);
    return(
        <div className="main-app">
            <h2>Main app, loading children async;</h2>
            {props}
            <Suspense fallback={'Loading LazyLoadedParts...'}>
                <LazyLoadedPart />
                <LazyLoadedHooked />
            </Suspense>
        </div>
    );

};

export default MainApp;