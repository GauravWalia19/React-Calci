import React,{useState} from 'react';
import './App.css';
import Screen from './Screen';
import ButtonList from './ButtonList';

function App() {
  const [screenText, setScreenText] = useState("");
  return (
    <div className="app">
      <div className="calculator">
        <img src="logo192.png" alt="react" className="calcLogo"/>
        <h1>React Calculator</h1>
        <Screen screenText={screenText} setScreenText={setScreenText}/>
        <ButtonList operations={[0,1,2,3,4]} screenText={screenText} setScreenText={setScreenText}/>
        <ButtonList operations={[5,6,7,8,9]} screenText={screenText} setScreenText={setScreenText}/>
        <ButtonList operations={['+','-','*','/','=']} screenText={screenText} setScreenText={setScreenText}/>
        <ButtonList operations={['C','<=','.']} screenText={screenText} setScreenText={setScreenText}/>
      </div>
    </div>
  );
}

export default App;
