import React from 'react';

const Footer = (props) => {
    const getFooterStyle = () => {
        return {
            textAlign: 'center',
            color: props.darkMode ? 'white' : 'black'
        }
    }
    return (
        <div style={getFooterStyle()}>
            &copy; Gaurav Walia 2020
        </div>
    )
;}

export default Footer;
