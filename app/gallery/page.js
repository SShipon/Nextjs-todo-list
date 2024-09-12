import Image from 'next/image';
import React from 'react';
import nextImage from '../assets/00-40m-removebg-preview.png'
const GalleryPage = () => {
    return (
        <div>
            <h1 className='text-center text-4xl'>Image Optimizations </h1>
            <h2 className='text-center text-2xl'>Regular image tag</h2>
            <img src="https://images.unsplash.com/photo-1725663656850-7bc515816fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D" alt="Image " width={500}
            height={500}
            className='mx-auto' />

            <p className='text-center text-2xl '>Next images Components</p>
            <Image src="https://images.unsplash.com/photo-1725663656850-7bc515816fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D" alt="Image " width={500}
            height={500}
            className='mx-auto' />


<p className='text-center text-2xl '>Next images Components</p>
            <Image src={nextImage} alt="Image " width={500}
            height={500}
            className='mx-auto' />

          
        </div>
    );
};

export default GalleryPage;