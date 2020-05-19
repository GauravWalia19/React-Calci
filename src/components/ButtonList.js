import React from 'react';
import Button from './Button';

const ButtonList = (props)=>{
    return (
        <div>
            {props.operations.map((i) => (
                <Button value={i} 
                screenText={props.screenText} 
                setScreenText={props.setScreenText} 
                key={i}
                />)
                )
            }
        </div>
    )
}

export default ButtonList;