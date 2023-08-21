import React, { useContext, useState } from 'react';
import Ingredient from './Ingredient';
import '../styles/DishBlock.css'
import PlayButton from '../assets/icons/playButton';
import TimeIcon from '../assets/icons/timeIcon.jsx'

const DishBlock = ({id, dishImage, title, calories, time, ings, onClick}) => {

    const renderIngredient = (ing, index) => {
        if(index < 5) return <Ingredient key={index} ing={ing}/> 
        if(index < 6){
            if(ings.length == 6) {
                return <Ingredient key={index} ing={ing}/>
            }
    
            if(ings.length > 6) {
                return <div key={index} className='otherIngredients'>+{ings.length - 6} More</div>
            }
        }
    }
    
    return (
        <div className='dishBlock' onClick={onClick}>
            <div className="dish_intro_block">
                <div style={{backgroundImage: `url(${dishImage})`}} className="dish_image"></div>
                <div className="dish_title_block">
                    <div className="dish_title">{title}</div>
                    <div className="calories">{calories}cal</div>
                </div>
            </div>
            <div className="ings_title">Ingredients</div>
            <div className="ingredients_block">
                {ings.map(renderIngredient)}
            </div>
            <div className="tutotial_block">
                <button className='tutorial_button'>
                    <div className="play_icon">
                        <PlayButton/>
                    </div>
                    <div className="tutorial_button_text">Watch Tutorial</div>
                </button>
                <div className="cooking_time_block">
                    <div className="cooking_time_image"><TimeIcon/></div>
                    <div className="cooking_time_description">{time}</div>
                </div>
            </div>
        </div>
    );
};

export default DishBlock;