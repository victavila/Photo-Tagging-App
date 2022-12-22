import React from 'react';
import GameOver from './components/GameOver';
import Header from './components/Header';
import Main from './components/Main';
import AppContextProvider from './images/AppContextProvider';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <Main />
        <GameOver />
      </AppContextProvider>
    </div>
  );
}

export default App;
