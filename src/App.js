import React, {useState} from 'react';
import './App.css';

import UserContext from './contexts/UserContext';

import MainApp from './components/MainApp';

const handleClick = () => {
  import(/* webpackChunkName: "testModuleA" */ './modules/testModuleA.js')
    .then(( testModuleA ) => {
      console.log("testModuleA: ", testModuleA);
      testModuleA.default();
      console.log("testModuleA was now loaded");
    })
    .catch(err => {
      console.error("testModuleA was NOT! loaded. Errror: ", err);
    });
};

function App() {

  const [user, setUser] = useState("Mate");
  const [counterStartInt, setCounterStartInt] = useState(100);

  const providerValue = React.useMemo(() => ({
    user, setUser,
    counterStartInt, setCounterStartInt,
  }), [user, counterStartInt]);


  return (
    <UserContext.Provider value={providerValue}>
      <div className="App">
          <header className="App-header">
            <h1>{user}, hello from React <span role="img" aria-label="Smiley">😁</span></h1>
            <span role="img" aria-label="React icon" style={{fontSize: 50, color: "#0ea3d4", lineHeight: 1}}>⚛</span>
            <small>Testing CI with GitHub and NetFly and learning a bit of React Hooks and Context APIs</small>
          </header>

          <main className="App-main">

            <MainApp />

            <hr />

            <button onClick={handleClick}>Load testModuleA</button>

          </main>

          <footer className="App-footer">
            <small>Yo, this is just a test, dude <span role="img" aria-label="Smiley">😁</span></small>
          </footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
