import React from 'react';
import { NavLink } from 'react-router-dom'

const Menu = () => (
    <ul className="tab-menu">
        <li><NavLink to="/nei">Nei</NavLink></li>
        <li><NavLink to="/navn">Navn</NavLink></li>
        <li><NavLink to="/ja">Ja</NavLink></li>
    </ul>
);

export default Menu;
