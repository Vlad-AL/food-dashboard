import React, { useState } from 'react';
import '../styles/Ingredient.css'

const Ingredient = ({ing, additional, infoBlock}) => {

    const ingIcons = [{grapes: '🍇'}, {melon: '🍈'}, {watermelon: '🍉'}, {tangerine: '🍊'}, {lemon: '🍋'}, {banana: '🍌'}, 
    {pineapple: '🍍'}, {mango: '🥭'}, {apple: '🍎'}, {pear: '🍐'}, {peach: '🍑'}, {cherries: '🍒'}, {strawberry: '🍓'}, 
    {kiwi: '🥝'}, {tomato: '🍅'}, {coconut: '🥥'}, {avocado: '🥑'}, {eggplant: '🍆'}, {potato: '🥔'}, {carrot: '🥕'}, 
    {corn: '🌽'}, {pepper: '🌶️'}, {cucumber: '🥒'}, {vegetable: '🥬'}, {broccoli: '🥦'}, {garlic: '🧄'}, {onion: '🧅'}, 
    {rice: '🍚'}, {milk: '🥛'}, {eggs: '🥚'}, {salt: '🧂'}, {chicken: '🐔'}, {pork: '🐖'}, {beef: '🐄'}, {noodle: '🍜'},
    {shrimp: '🍤'}, {almond: '🌰'}, {raspberry: '🍓'}];

    const [isSelected, setIsSelected] = useState(false)

    const setClass = `${(isSelected && infoBlock) ? ((additional) ? 'ingredient active additional' : 'ingredient active') : 'ingredient'}`

    return (
        <div onClick={() => setIsSelected(!isSelected)} className={setClass}>
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