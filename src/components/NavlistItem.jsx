import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const NavlistItem = ({link, title, icon: Icon}) => {
    const location = useLocation()
    const isActive = location.pathname === link;

    return (
        <Link to={link} className={isActive ? 'NavlistItem currentPage' : 'NavlistItem'}>
            <Icon fill={isActive ? "#3c2590": "#a59fbf"}/>
            <div className="NavListItemImg"></div>
            <div className="NavListItemTitle">{title}</div>
        </Link>
    );
};

export default NavlistItem;