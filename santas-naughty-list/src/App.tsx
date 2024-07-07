import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [naughtyKids, setNaughtyKids] = React.useState([]);
  const [niceKids, setNiceKids] = React.useState([]);

  // Add the handleSort function here

  // Add a reference to the input field here

  return (
    <div>
      <h1>Santa's Naughty and Nice List</h1>
      {/* Add the input field here */}
      {/* Add the buttons here */}
      <h2>Naughty List</h2>
      {/* Add list here */}
      <h2>Nice List</h2>
      {/* Add list here */}
    </div>
  );
};

export default App;
