import React,{useState} from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const App = () => {
  // Use the useState hook to manage the component's state
  const [mix, setMix] = useState('regular');
  const [milk, setMilk] = useState('whole');
  const [toppings, setToppings] = useState('marshmallows');
  
  return (
    <div>
      <h1>Hot Chocolate Customizer</h1>
      {/*TODO: ADD A FORM FOR SETTING MIX, MILK & TOPPING*/}
      {/*TODO: INCLUDE AT LEAST 3 TYPES OF EACH*/}
      <p>
        Your hot chocolate: {mix} with {milk} milk and {toppings} on top.
      </p>
    </div>
  );
}

export default App;
