import React,{useState} from 'react';
import './App.css';
import Screen from './Screen';
import Button from './Button';

function App() {
  const operations = [0,1,2,3,4,5,6,7,8,9,'+','-','*','/','=','C','<='];
  const [screenText, setScreenText] = useState("");
  return (
    <div>
      <img src="logo192.png" alt="react"/>
      <h1>React Calculator</h1>
      <Screen screenText={screenText} setScreenText={setScreenText}/>
      {operations.map((i) => (
        <Button value={i} 
        screenText={screenText} 
        setScreenText={setScreenText} 
        key={i}
        />)
        )
      }
    </div>
  );
}

export default App;
