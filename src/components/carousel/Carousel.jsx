import React from 'react'
import './Carousel.css'

const Carousel = ({handlePrev,handleNext}) => {
    return (
        <div className="carousel__container">
            <div className="header">
                <div className="container">
                    <div className="live__container">
                        <div className="cirlce"></div>
                        <h2>Live</h2>
                    </div>
                    <h2>Upcoming live courses</h2>
                </div>
                <div className="slider__container">
                    <button className="slider" onClick={handlePrev}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="slider" onClick={handleNext}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel
