import React from 'react';

const Button = (props)=>{

    const handleClick = ()=>{
        if(props.value==='=' && props.screenText!==''){
            // evaluate the expression and set the new state
            let result = '';
            try{
                // eslint-disable-next-line no-eval
                result = eval(props.screenText);
            }catch(e){}
            props.setScreenText(result);
        }else if(props.value==='C'){
            props.setScreenText('');
        }else if(props.value==='<=' && props.screenText!==''){
            let val = props.screenText.toString();
            let newState = val.substring(0,val.length-1);
            props.setScreenText(()=>(
                newState
            ))
        }else if(props.value!=='=' && props.value!=='<='){
            props.setScreenText(props.screenText + props.value);
        }
    }

    return (
        <div>
            <button style={{padding: "10px",margin: "5px"}} onClick={handleClick}>{props.value}</button>
        </div>
    )
}

export default Button;