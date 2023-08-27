import React, { useState } from 'react';
import '../styles/Ingredient.css'

const Ingredient = ({ing, additional, infoBlock, contains, onClick, isSelected, filter}) => {

    const ingIcons = [{grapes: '🍇'}, {melon: '🍈'}, {watermelon: '🍉'}, {tangerine: '🍊'}, {lemon: '🍋'}, {banana: '🍌'}, 
    {pineapple: '🍍'}, {mango: '🥭'}, {apple: '🍎'}, {pear: '🍐'}, {peach: '🍑'}, {cherries: '🍒'}, {strawberry: '🍓'}, 
    {kiwi: '🥝'}, {tomato: '🍅'}, {coconut: '🥥'}, {avocado: '🥑'}, {eggplant: '🍆'}, {potato: '🥔'}, {carrot: '🥕'}, 
    {corn: '🌽'}, {pepper: '🌶️'}, {cucumber: '🥒'}, {vegetable: '🥬'}, {broccoli: '🥦'}, {garlic: '🧄'}, {onion: '🧅'}, 
    {rice: '🍚'}, {milk: '🥛'}, {eggs: '🥚'}, {salt: '🧂'}, {chicken: '🐔'}, {pork: '🐖'}, {beef: '🐄'},
    {noodle: '🍜'}, {shrimp: '🍤'}, {almond: '🌰'}, {raspberry: '🍓'}, {bread: '🍞'}, {flour: '🍚'}, {oil: '🧈'}, {cheese: '🧀'}];

    const setClass = `${(isSelected && infoBlock) ? ((additional) ? ((contains) ? 'ingredient active additional contains' : 'ingredient active additional') : 'ingredient active') : 'ingredient'}`
    
    // if(!filter) {
    //     onClick = () => {
    //         isSelected = !isSelected
    //         console.log(isSelected, infoBlock, additional, !contains)
    //     }
    // }

    return (
        <div onClick={onClick} className={setClass} style={additional ? {cursor: 'pointer'} : {cursor: 'default'}}>
            <div className="ingredient_image">
                {ingIcons.map(ingIcon => {
                    if(Object.keys(ingIcon) == ing) {
                        return(Object.values(ingIcon))
                    }
                })}
            </div>
            <div className="ingredient_title">
                {ingIcons.map(ingIcon => {
                    if(Object.keys(ingIcon) == ing) {
                        return(Object.keys(ingIcon))
                    }
                })}
            </div>
        </div>
    );
};

export default Ingredient;