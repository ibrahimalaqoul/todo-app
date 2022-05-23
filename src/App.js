import './App.css';
import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './context/settings';
import Auth from './context/Auth';
function App() {
  return (
    <div className="App">
      <Auth>
      <Settings>
         <ToDo />
      </Settings>
      </Auth>
    </div>
  );
}

export default App;
