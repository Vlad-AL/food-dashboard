import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logo.css';

const Logo = () => {
    return (
        <Link to='/overview' className='logo'><span className='logo_color'>eat</span>dish._</Link>
    );
};

export default Logo;