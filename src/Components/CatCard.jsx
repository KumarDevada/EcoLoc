import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'

const CatCard = ({image , name , cardid, cost}) => {

  const navigate = useNavigate()
  const {setiscartupdated , iscartupdated, User} = useContext(Context);
  const addtocart = async() => {
    console.log(cardid, sessionStorage.getItem('user') );
    try {
      const response = await fetch('https://ecoloc-backend.onrender.com/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${User?.accessToken}`
      },
      body: JSON.stringify({product: name, price: cost })
    })
    

    const data = await response.json();

    if(data?.success)
    {
      setiscartupdated(!iscartupdated)
      navigate('/cart')
    }
    else{
      alert("Something went wrong")
    }
      
    } catch (error) {
        console.log(error);
    }
    
  }

  return (
    <div className='bg-slate-200 md:max-w-[20vw]  shadow-sm p-4 rounded-xl flex flex-col  gap-[2vh] cursor-pointer hover:scale-105 transition-transform hover:bg-green-100' onClick={!sessionStorage.getItem("user") ? (()=>navigate("/login")) : (()=>addtocart())}>
        <div className="w-full max-h-[25vh] flex z-10">
              <img src={image} alt="" className=" object-cover rounded-xl " />
        </div>
        <h1 className='text-md text-slate-500 text-center font-montserrat font-bold'>{name}</h1>
        {/* {(link == "#") ? (
          <button
          className="shadow-3xl font-medium text-center border-2 font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400  transition-transform nav"
          onClick={!sessionStorage.getItem("user") ? (()=>navigate("/login")) : (()=>addtocart())}
        >
          Add to cart
        </button>
        ) : ("")} */}
    </div>
  )
}

export default CatCard