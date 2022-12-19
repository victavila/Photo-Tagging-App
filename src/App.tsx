import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import AppContextProvider from './images/AppContextProvider';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <Main />
      </AppContextProvider>
    </div>
  );
}

export default App;
