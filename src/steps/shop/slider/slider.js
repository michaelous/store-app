import React, {useState} from 'react';

export const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

    return <section className={"slideWrapper"}>
        {slides.map((slide, index) => {
            return <div key={index} className={index === current ? 'slide active' : 'slide'}
                        style={{backgroundImage: `url(${slide.image})`}}>
                <p className={"slideText"}>{slide.text}</p>
                <p className={"currentSlide"}>Showing {current + 1} of 3</p>
            </div>
        })}

        <span className='arrow left-arrow' onClick={prevSlide}/>
        <span className='arrow right-arrow' onClick={nextSlide}/>

        <svg className="arrows">
            <path className="a1" d="M0 0 L15 16 L30 0"></path>
            <path className="a2" d="M0 10 L15 26 L30 10"></path>
        </svg>
    </section>
};
