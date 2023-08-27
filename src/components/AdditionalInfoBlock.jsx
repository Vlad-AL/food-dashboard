import React, { useState } from 'react';
import NotificationIcon from '../assets/icons/notifictionIcon';
import '../styles/AdditionalInfoBlock.css'
import AccountIcon from '../assets/icons/accountIcon'
import InfoDiagram from './InfoDiagram'
import LegendItem from './LegendItem';
import Ingredient from './Ingredient';
import CookingStep from './CookingStep';

const AdditionalInfoBlock = ({dish}) => {

    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleIngredientClick = (ing) => {
        if(selectedIngredients.includes(ing)){
            setSelectedIngredients(selectedIngredients.filter(selectedIngredient => selectedIngredient !== ing))
        }
        else{
            setSelectedIngredients([...selectedIngredients, ing]);
        }
    }

    if(!dish) {
        return null
    }
    

    return (
        <div className='additionalInfoBlock'>
            <div className="user_block info_block">
                <button className="notifications"><NotificationIcon/></button>
                <button className="account_block"><AccountIcon/></button>
            </div>
            <div className="report_title info_block">Report <span>on {dish.title}</span></div>
            <div className="report_diagram info_block">
                <InfoDiagram diagramData={[
                    dish.carbohydrates,
                    dish.fats,
                    dish.protein,
                ]} className="ration_diagram" />
                <div className="legend_diagram">
                    <LegendItem icon_color={'rgb(255, 236, 209)'} legend_name={'calories'} gramm_count={dish.calories}/>
                    <LegendItem icon_color={'rgb(124, 95, 237)'} legend_name={'carbohydrates'} gramm_count={dish.carbohydrates}/>
                    <LegendItem icon_color={'rgb(251, 147, 0)'} legend_name={'fats'} gramm_count={dish.fats}/>
                    <LegendItem icon_color={'rgb(0, 166, 80)'} legend_name={'protein'} gramm_count={dish.protein}/>
                </div>
            </div>
            <div className="ings_title info_block">Ingredients</div>
            <div className="ings_block info_block">
                {
                    dish.ings.map(ing => {
                        return(
                            <Ingredient 
                                additional 
                                infoBlock 
                                className="ingredient" 
                                key={ing} 
                                ing={ing}
                                isSelected={selectedIngredients.includes(ing)}
                                onClick={() => handleIngredientClick(ing)} 
                            /> 
                        )
                    })
                }
            </div>
            <div className="cooking_steps_block">
                <div className="cooking_steps_title info_block">Step by step</div>
                <div className="steps_block">
                    {dish.steps.map((step, index) => {
                        return <CookingStep step={step} key={index} count={index}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfoBlock;