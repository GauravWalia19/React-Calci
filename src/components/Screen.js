import React from 'react';

const Screen = (props) => {
    const inputHandler = (e)=> {
        e.preventDefault();
        props.setScreenText(e.target.value);
    }

    return (
        <div>
            <input type="text" value={props.screenText} onChange={inputHandler} style={{padding: "5px"}}/>
        </div>
    )
}

export default Screen;