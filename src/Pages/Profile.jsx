import React from 'react'
import { Wrapper } from '../Components'
import { useContext } from 'react'
import Context from '../context/Context'
import { useNavigate } from 'react-router-dom'
import admin from "../assets/profile.png";
import ban from '../assets/ban.webp'
import profile from "../assets/man.png"
import { useEffect } from 'react'

const Profile = () => {

    const {User} = useContext(Context);

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("user");
        navigate("/")
    }

    useEffect(() => {
        
        console.log(User)

    }, [])

  return (
    <Wrapper>
        <div style={ { backgroundImage: `url(${ban})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', width:'90vw', height:'80vh',   position:'relative', backgroundColor:'', borderRadius:'20px'}}>
            {/* <img style={{zIndex:1,position:'absolute'}} src={ban} alt="" /> */}
            <div style={{}} className=' z-20 flex '>
                
                <div className='h-fit w-fit ml-12 mt-16 bg-white rounded-3xl  flex flex-col md:flex-row gap-4  px-10 py-10'>
                    
                    <div className=' w-fit p-4 rounded-lg'>
                    {User?.isadmin ? (<img src={admin} alt="" className='h-[20vh] md:h-[30vh]' />) : (<img src={profile} alt="" className='h-[20vh] md:h-[30vh]' />)}
                    <h2 className=' text-slate-500 mt-5  font-poppins text-4xl'><i class="fa-solid fa-user"></i> Kumar{User?.username}</h2>
                    </div>
                    <div className='flex flex-col gap-5 '>
                        <div className='flex flex-col gap-5 mb-5 '>
                        
                        <div className='flex gap-5'>
                            
                        </div>
                        <div className='flex gap-5'>
                            <h2 className='text-6xl text-green-500  font-poppins font-medium'><i class="fa-solid fa-tree"></i> 2{User?.treesPlanted} </h2>
                        </div>
                        <div className='flex gap-5'>
                            <h2 className='text-4xl text-orange-400  font-poppins font-medium'>280{User?.credits} <i class="fa-brands fa-bitcoin"></i></h2>
                        </div>
                        <div className='flex gap-5'>
                            <h2 className='text-4xl text-blue-500 font-poppins font-medium'><i class="fa-solid fa-recycle"></i> 3{User?.recycledDevices?.length} Items</h2>
                        </div>
                        </div>
                        <button style={{backgroundColor:'lightgrey'}}
                    className="shadow-md  font-medium border-2 font-poppins px-4 py-2 bg-slate-500 rounded-3xl hover:bg-slate-500  transition-transform nav"
                    onClick={() => logout()}
                    >
                    Logout
                    </button>
                    </div>
                    <div className='flex flex-col'>
                    <h2 className='text-center text-3xl font-bold text-slate-500'>Wallet</h2>
                    <h1 className='text-center text-5xl font-bold p-2 pt-6 pb-8 text-orange-300' >4563 ₹</h1>
                    <input
                        type="name"
                        className="w-full mt-2 rounded-lg  p-4 font-montserrat border-2 font-medium bg-[#222222]"
                        
                        placeholder="UPI ID"
                        />
                    <button style={{backgroundColor:'orange'}} className='shadow-md  font-medium border-2 font-poppins px-4 py-2 mt-8 bg-slate-500 rounded-3xl hover:bg-slate-500  transition-transform nav'>Withdraw</button>
                </div>
                    
                </div>


                
            </div>
        </div>
        
    
    </Wrapper>
  )
}

export default Profile