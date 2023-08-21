import React from 'react';
import '../styles/CookingStep.css'

const CookingStep = ({count, step}) => {
    return (
        <div className='cookingStep' tabIndex={0}>
            <div className="step_counter">Step {count+1}</div>
            <div className="step_description">{step}</div>
        </div>
    );
};

export default CookingStep;