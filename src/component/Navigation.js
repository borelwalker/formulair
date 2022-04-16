import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>

            <NavLink exact to="/" className="Connection">
                Connection
            </NavLink>
            <NavLink exact to="News" className="Connection">
                Inscription
            </NavLink>
            <NavLink exact to="Contact" className="Contact">
                Contact
            </NavLink>
            <NavLink exact to="Telechargement" className="Contact">
                Telechargement
            </NavLink>
        </div>
    );
};

export default Navigation;