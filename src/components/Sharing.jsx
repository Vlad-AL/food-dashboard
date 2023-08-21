import React from 'react';
import '../styles/Sharing.css';

const Sharing = () => {
    return (
        <div className='sharing_box'>
            <div className='background_dish_image'></div>
            <div className='sharing_text'>Share your own <span>Recipe</span> with the community</div>
            <button>Upload now</button>
        </div>
    );
};

export default Sharing;