import React from 'react';
import hero from '../../assest/image/image-07.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200 px-8 py-8">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
                <img src= {hero} alt='' />
                <div>
                    <h1 className="text-5xl font-extrabold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;