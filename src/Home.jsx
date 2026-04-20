import React from 'react'

const Home = ({ img, heading, Paragraph, btn, year }) => {
  return (
    <div className="w-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      
     <h2></h2>
      <div className="relative">
        <img 
          src={img} 
          alt="" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 text-white top-70">
          <h2 className="text-lg font-semibold text-center ">{heading}</h2>
          <p className="text-sm">{Paragraph}</p>

          <div className="flex justify-between items-center mt-2 ">
            <button className="bg-blue-500 px-3 py-1 rounded">
              {btn}
            </button>
            <h6 className="text-xs">{year}</h6>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;