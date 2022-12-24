import React from 'react';
import GameOver from './components/GameOver';
import Header from './components/Header';
import Main from './components/Main';
import StartGame from './components/StartGame';
import AppContextProvider from './contexts/AppContextProvider';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <Main />
        <GameOver />
        <StartGame />
      </AppContextProvider>
    </div>
  );
}

export default App;
