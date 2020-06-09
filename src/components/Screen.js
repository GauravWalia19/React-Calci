import React from 'react';
import "./styles/Screen.css";
const Screen = (props) => {
    const handleInput = (e)=> {
        e.preventDefault();
        props.setScreenText(e.target.value);
    }

    return (
        <div className="screen">
            <input 
                type="text" 
                value={props.screenText} 
                onChange={handleInput} 
                className={props.darkMode ? 'screenInput darkInput' : 'screenInput lightInput'}
            />
        </div>
    )
}

export default Screen;