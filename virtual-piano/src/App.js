import React,{useState} from 'react'
import ReactDOM from 'react-dom/client';


const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const PianoKey = ({ note, isPressed, onPress }) => (

  {/*
  TODO: CREATE VISUALS FOR THE KEYS AS BUTTONS
  TODO: GIVE PRESSED BUTTONS THE pressed CLASSNAME
  TODO: ADD FUNCTIONALITY TO BUTTONS & RENDER THEIR NOTE NAME
  */}
);

const Piano = ({ pressedNotes, onPressKey }) => (
  <div>
    keys go here
  {/*TODO: RENDER ALL KEYS HERE*/}
  </div>
);

const App = () => {
  const [pressedNotes, setPressedNotes] = useState([]);

  const onPressKey = note => {
    setPressedNotes(prevPressedNotes =>
      prevPressedNotes.includes(note)
        ? prevPressedNotes.filter(n => n !== note)
        : [...prevPressedNotes, note]
    );
  };

  return <Piano pressedNotes={pressedNotes} onPressKey={onPressKey} />;
};

export default App;