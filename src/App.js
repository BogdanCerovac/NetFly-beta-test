import React from 'react';
import './App.css';

import { UserProvider } from './contexts/UserContext';

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

  const user = { name: 'Bogdan', counterStartInt: 100 }

  return (
    <UserProvider value={user}>
      <div className="App">
          <header className="App-header">
            <h1>{user.name}, hello from React <span role="img" aria-label="Smiley">😁</span></h1>
            <span role="img" aria-label="React icon" style={{fontSize: 80, color: "#0ea3d4"}}>⚛</span>
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
    </UserProvider>
  );
}

export default App;
