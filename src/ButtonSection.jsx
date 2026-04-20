import React from 'react'
import img from './assets/Red.png'
import imge from './assets/Rs.png'
const ButtomSection = () => {
    return (

        <div className='flex w-full h-[300px] items-center gap-12 p-90 mt-40  space-y-20  bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 
                animate-gradient bg-[length:100%_200%] '>
            <div>
                <img src={imge} alt="Red-img" className='w-[300] h-[300]  relative static  border-4 border-red-600  rounded-xl bg-gray-700 shadow-[0_10px_30px_rgba(65,105,225,0.5)] 
             hover:scale-105 
             hover:shadow-[0_0_50px_rgba(65,105,225,0.9)] 
             transition-all duration-300"' />
                <img src={img} alt="Rs-img" className='w-30 h-30 absolute bg-black rounded-full top-710 mr-300 left-155 border-4 border-red-600 shadow-[0_10px_30px_rgba(65,105,225,0.5)] 
             hover:scale-105 
             hover:shadow-[0_0_50px_rgba(65,105,225,0.9)] 
             transition-all duration-300" ' />
            </div>

            <div className='text-bold text-white text-2xl mb-30'>
                <p>Red Bull is more than just an energy drink — it’s a global lifestyle brand that fuels ambition, adventure, and high performance. From extreme sports and music to innovation and creativity, Red Bull inspires people to push their limits and chase their passions. With its iconic “gives you wings” philosophy, it empowers individuals to go beyond the ordinary and achieve the extraordinary.</p>
            </div>
        </div>

    )
}

export default ButtomSection
