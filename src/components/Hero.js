import React from 'react'

function Hero() {
    return (
        <div>
            <div class="relative overflow-hidden">
            <img src="https://ventsmagazine.com/wp-content/uploads/2020/11/blog.jpg" className=' w-full h-96' alt="Blog Image"/>
            <div class="absolute text-3xl w-full py-10 bottom-0 inset-x-0 text-gray-900 text-center leading-4">Blogging App for Creators</div>
            </div>
        </div>
    )
}

export default Hero
