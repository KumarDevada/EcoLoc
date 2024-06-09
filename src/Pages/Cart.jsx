import React, { useEffect, useState } from "react";
import { Wrapper , Cartcard } from "../Components";
import { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { User, setUser } = useContext(Context);
  const [cartlist, setcartlist] = useState();
  const [sum, setsum] = useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    setsum(0);
    const fetchCartlist = async () => {
      try {
        const response = await fetch('https://ecoloc-backend.onrender.com/api/cart', {headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${User?.accessToken}`
        }});
        const data = await response.json();
        console.log(data?.data);
        setcartlist(data.data);
        data?.data.forEach(element => {
          setsum((sum)=> sum+element.price)
        });
      } catch (error) {
        console.error('Error fetching cart list:', error);
      }
    };

    fetchCartlist();
  },[])

  const checkout = async () => {
    try {
      const response = await fetch('https://ecoloc-backend.onrender.com/api/cart/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${User?.accessToken}`
      },
      body: JSON.stringify({})
    })
    

    const data = await response.json();

    if(data?.success)
    {
      alert('Checkout successful. Amount will be added in your account shortly.')
      setUser((prev) => {
        return {
          ...prev,
          ...data.data
        }
      })
      navigate('/');
    }
    else{
      alert("Something went wrong. Please try again.")
    }
      
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <Wrapper>
      <h1 className="mb-[10vh] font-montserrat font-bold text-2xl mt-[5vh]">
        Your Cart
      </h1>
      <div className="flex md:flex-row flex-col gap-[5vh]">
        <div className="w-full  flex flex-col gap-[5vh]">
          {cartlist?.map((item) => {
            // console.log("I am Item",item);
            return (<Cartcard item={item}/>)
          })}
        </div>
        <div className="shadow-md bg-green-200 p-4 rounded-xl h-fit">
          <h2 className="text-slate-500 font-montserrat text-3xl m-4 font-bold">Pay Slip</h2>
          <div className="bg-Grey font-montserrat md:h-[200px] md:w-[350px] w-auto h-[250px]  rounded-md p-4">
            <h3 className="text-start font-medium mb-2">SubTotal : <span className="text-start text-3xl font-medium mb-2">{sum} ₹</span></h3>
            <hr style={{color:'black'}} />
            <div className="text-start mt-2">
              This is just an estimation of your revenue, Actually price may vary on inspection.
              
              You will be getting 5% of your revenue as ecocoins ie. 
              <span className="text-start text-3xl font-medium mb-2"> {Math.round(sum*0.05)} <i style={{color:'orange'}} class="fa-brands fa-bitcoin"></i></span>
            </div>
          </div>
          <button onClick={(e) => checkout()} style={{color:'white' ,backgroundColor:'green'}} className="px-10 py-2 border-2 text-white font-montserrat hover:bg-[#01796f] hover:scale-105  mt-4 rounded-lg  font-semibold  transition-transform active:scale-105">
            Check Out
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
