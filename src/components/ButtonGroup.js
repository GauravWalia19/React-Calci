import React from 'react';
import Screen from './Screen';
import ButtonList from './ButtonList';

const ButtonGroup = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Screen 
                screenText={props.screenText} 
                setScreenText={props.setScreenText}
                darkMode={props.darkMode}
            />
            <ButtonList
                operations={[0, 1, 2, 3, 4]}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
            <ButtonList
                operations={[5, 6, 7, 8, 9]}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
            <ButtonList
                operations={['+', '-', '*', '/','%']}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
            <ButtonList
                operations={['C', '<=', '.','=']}
                screenText={props.screenText}
                handleClickOperation={props.handleClickOperation}
                darkMode={props.darkMode}
            />
        </form>
    )
}

export default ButtonGroup;
