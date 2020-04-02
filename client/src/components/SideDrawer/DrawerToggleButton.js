import React from 'react';

const DrawerToggleButton = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_button_line"></div>
        <div className="toggle_button_line"></div>
        <div className="toggle_button_line"></div>
    </button>
);

export default DrawerToggleButton;