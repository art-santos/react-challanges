import logo from './logo.svg';
import './App.css';


import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

// They don't necessarily need to take props
// This one also has an explicit return
const App = () => {
  const [elves, setElves] = useState([
    'Buddy',
    'Dobby',
    'Winky',
    'Bing',
    'Bernard'
  ]);
  
  const [sort, setSort] = useState([""])
  
  useEffect(() => {
    const sorted = [...elves].sort()
    setSort(sorted)
  }, [])

  const stringfiedElves = elves
  const stringfiedSort = sort
  

  return (
    <div className='App'>
      <div className="Card">
      {stringfiedElves.map((elf, index) => (
        <div key={index}>{elf}</div>
      ))}
      </div>
      <div className="Card">
      {stringfiedSort.map((elf, index) => (
        <div key={index}>{elf}</div>
      ))}
      </div>
    </div>
  );
};

export default App;