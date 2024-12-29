import React from 'react'
import './ServiceCard.css'
import PropTypes from 'prop-types';


function ServiceCard({ title, devImage, description }) {
    return (
        <div className='card_container'>
            {/* <img src={image} alt='application' /> */}
            <div className='before'></div>
            <div className="dev_image">
                <img src={devImage} alt='devleopment image' className='icon'/>
            {/* <DevImage className="icon"/> */}
            </div>
            <div className='after'></div>

            <h2 className='title'>
                {title}
            </h2>
            <span className='description'>{description}</span>

            <div className='circle1'></div>
            <div className='circle2'></div>
        </div>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ServiceCard