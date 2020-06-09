import React from 'react';
import Button from './Button';

const ButtonList = (props)=>{
    return (
        <div>
            {props.operations.map((i) => (
                <Button value={i} 
                screenText={props.screenText} 
                handleClickOperation={props.handleClickOperation} 
                darkMode={props.darkMode}
                key={i}
                />)
                )
            }
        </div>
    )
}

export default ButtonList;