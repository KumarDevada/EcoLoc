import React from 'react'
import image from "../assets/laptop.png";
import tag from "../assets/t2.png";

const Cartcard = ({item}) => {
  return (
    <div className='p-4 bg-slate-100 shadow-md rounded-xl flex gap-[5vh] '>
        <div className="w-36 h-fit flex z-10">
              <img  src={image} alt="" className=" object-cover rounded-xl " />
        </div>
        <div>
            <h1 className=' font-montserrat text-slate-600 text-2xl mb-3 font-bold'> {item.product}</h1>
            <h2 className='font-montserrat font-bold text-[#01796f]'>Estimated Price  </h2>
            <h2 className='font-montserrat font-bold text-[#01796f]' ><span className='text-5xl text-orange-400'>{item.price} ₹</span></h2>
            

        </div>
        <div className='ml-4'>
        <h1 className='font-montserrat text-slate-600 mt-8 text-md font-bold'> In cart since </h1>
        <h1 className='font-montserrat text-slate-600 text-md font-bold'> {item.orderedDate.slice(0,10)}</h1>
        </div>
        <div>
          <img style={{ marginLeft:'200px', width:'150px', rotate:'-90deg'}} src={tag} alt="" />
        </div>
    </div>
  )
}

export default Cartcard