import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import NavlistItem from "../components/NavlistItem.jsx";
import '../styles/App.css';
import '../styles/Linklist.css';
import '../styles/NavlistItem.css';
import overviewIcon from '../assets/icons/overviewIcon.jsx'
import recipesIcon from '../assets/icons/recipesIcon.jsx'
import favoriteIcon from '../assets/icons/favoriteIcon.jsx'
import communityIcon from '../assets/icons/communityIcon.jsx'
import settingIcon from '../assets/icons/settingIcon.jsx'
import Sharing from "./Sharing.jsx";

const Linklist = () => {
    return (
        <div className="linklist">
            <Logo/>
            <NavlistItem link='/' title="Overview" icon={overviewIcon}/>
            <NavlistItem link='/recipes' title="Recipes" icon={recipesIcon}/>
            <NavlistItem link='/favorite' title="Favorite" icon={favoriteIcon}/>
            <NavlistItem link='/community' title="Community" icon={communityIcon}/>
            <NavlistItem link='/setting' title="Setting" icon={settingIcon}/>
            <Sharing/>
        </div>
    );
};

export default Linklist;