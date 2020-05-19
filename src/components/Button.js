import React from 'react';
import "./Button.css";

const Button = (props)=>{

    const handleClick = ()=>{
        if(props.value==='=' && props.screenText!==''){
            // evaluate the expression and set the new state
            let result = '';
            try{
                // eslint-disable-next-line no-eval
                result = eval(props.screenText);
            }catch(e){}
            props.setScreenText(result.toString());
        }else if(props.value==='C'){
            props.setScreenText('');
        }else if(props.value==='<=' && props.screenText!==''){
            let val = props.screenText;
            let newState = val.substring(0,val.length-1);
            props.setScreenText(()=>(
                newState
            ))
        }else if(props.value!=='=' && props.value!=='<='){
            let screenText = props.screenText;
            props.setScreenText(screenText + props.value);
        }
    }

    return (
        <button className="operationButton" onClick={handleClick}>{props.value}</button>
    )
}

export default Button;