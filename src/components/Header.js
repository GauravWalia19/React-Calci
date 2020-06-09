import React from 'react';

const Header = (props) => {
    const handleClick = () => {
        props.setDarkMode(!props.darkMode);
    }
    const headingStyle={
        color: props.darkMode ? 'white' : 'black'
    }
    return (
        <React.Fragment>
            <img src="logo192.png" alt="react" className="calcLogo" onClick={handleClick}/>
            <h1 style={headingStyle}>React Calculator</h1>
        </React.Fragment>
    )
}

export default Header;
