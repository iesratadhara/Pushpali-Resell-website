import React from 'react';
import loader from './loder.json'

const Loader = () => {
    return (
        <div  className='m-auto'>
            <img className='w-20' src={loader} alt="" />
        </div>
    );
};

export default Loader;