import './App.css';
import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './context/settings';
function App() {
  return (
    <div className="App">
      <Settings>
         <ToDo />
      </Settings>
    </div>
  );
}

export default App;
