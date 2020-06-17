import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./Profile";
import Counter from "./Counter";

function App() {
  return (
      <>
        <Profile username={"milban"} name={"박준혁"} />
        <Counter />
      </>
  );
}

export default App;
