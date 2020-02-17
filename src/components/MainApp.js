import React, { Suspense } from 'react';
import './MainApp.css';

const LazyLoadedPart = React.lazy(() => import(/* webpackChunkName: "LazyLoadedPart" */ './LazyLoadedPart'));
const LazyLoadedHooked = React.lazy(() => import(/* webpackChunkName: "LazyLoadedHooked" */ './LazyLoadedHooked'));
const LazyLoadedInput = React.lazy(() => import(/* webpackChunkName: "LazyLoadedInput" */ './LazyLoadedInput'));

const MainApp = ({props}) => {
    //const user = useContext(UserContext);
    return(
        <div className="main-app">
            <h2>Main, lazy loading children;</h2>
            {props}
            <Suspense fallback={'Loading children, please wait a moment or two...'}>
                <LazyLoadedPart />
                <LazyLoadedHooked />
                <LazyLoadedInput />
            </Suspense>
        </div>
    );

};

export default MainApp;