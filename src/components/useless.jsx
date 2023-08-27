import React, { useEffect, useState } from 'react';
import '../styles/FilterBlock.css'
import Ingredient from './Ingredient';

const FilterBlock = ({contains, title, setArray}) => {

    const ings = ['grapes', 'melon', 'watermelon', 'tangerine', 'lemon', 'banana', 
    'pineapple', 'mango', 'apple', 'pear', 'peach', 'cherries', 'strawberry', 
    'kiwi', 'tomato', 'coconut', 'avocado', 'eggplant', 'potato', 'carrot', 
    'corn', 'pepper', 'cucumber', 'vegetable', 'broccoli', 'garlic', 'onion', 
    'rice', 'milk', 'eggs', 'salt', 'chicken', 'pork', 'beef',
    'noodle', 'shrimp', 'almond', 'raspberry', 'bread', 'flour', 'oil', 'cheese'];

    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleIngredientClick = (ing) => {
        if(selectedIngredients.includes(ing)){
            setSelectedIngredients(selectedIngredients.filter(selectedIngredient => selectedIngredient !== ing))
        }
        else{
            setSelectedIngredients([...selectedIngredients, ing])
        }
        setArray(selectedIngredients)
    }

    useEffect(() => {
        console.log(selectedIngredients)
    }, [selectedIngredients])

    return (
        <div className='filter_chooser'>
            <div className="filter_block_title">{title}</div>
            <div className="ings_contain">
                {
                    ings.map((ing, index) => {
                        return (
                            <Ingredient 
                                filter 
                                infoBlock
                                additional 
                                contains={contains} 
                                className="ingredient"
                                key={index} 
                                ing={ing}
                                isSelected={selectedIngredients.includes(ing)}
                                onClick={() => handleIngredientClick(ing)} 
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FilterBlock;