import React from 'react';
import logo from './logo.svg';
import './App.css';

const USER_ARRAY = [
  { id: 1, name: "Martin", age: 45 },
  { id: 2, name: "Pierre", age: 15 },
  { id: 3, name: "Josee", age: 14 },
  { id: 4, name: "Melanie", age: 32 },
  { id: 5, name: "Sonia", age: 24 }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-logo App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
.
        </a>
        hello
      </header>

    </div>
  );
}


export default App;

