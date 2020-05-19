import React from 'react';
import "./Screen.css";
const Screen = (props) => {
    const inputHandler = (e)=> {
        e.preventDefault();
        props.setScreenText(e.target.value);
    }

    return (
        <div className="screen">
            <input type="text" value={props.screenText} onChange={inputHandler} className="screenInput"/>
        </div>
    )
}

export default Screen;