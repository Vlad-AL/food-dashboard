import React from 'react';
import '../styles/SharingPoster.css';

const SharingPoster = () => {
    return (
        <div className='sharingPoster'>
            <div className="sharing_poster_title">Add your own recipe</div>
            <div className="sharing_poster_description">Upload your own home-made recipe and share it with other members of our community</div>
            {/* <div className="sharing_poster_image"></div> */}
        </div>
    );
};

export default SharingPoster;