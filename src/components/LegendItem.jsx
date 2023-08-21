import React from 'react';
import '../styles/LegendItem.css'

const LegendItem = ({icon_color, legend_name, gramm_count}) => {

    const energyValue = () => {
        if(legend_name === 'calories') {
            return gramm_count + 'cal'
        }
        else return gramm_count + 'g'
    }    

    return (
        <div className='legendItem'>
            <div className="legend_title">
                <div className="legend_icon" style={{backgroundColor: icon_color}}></div>
                <div className="legend_name">{legend_name}</div>
            </div>
            <div className="gramm_count">
                {energyValue()}
            </div>
        </div>
    );
};

export default LegendItem;