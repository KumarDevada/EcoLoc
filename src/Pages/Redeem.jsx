import React from 'react'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
const Redeem = () => {
  return (
    <div>
        <h1 className=' text-center font-phudu font-medium mb-5'>Rewards / Redemption</h1>
        <div style={ {display:'flex' ,width: '90vw', height:'540px', backgroundColor:'lightgrey', borderRadius:'30px' , marginLeft:'60px', paddingLeft:'20px'}}>
            <div className='hover:opacity-50 cursor-pointer' style={{width:'350px', backgroundColor:'whitesmoke', borderRadius:'50px', overflow:'hidden', boxShadow:3, border: '1px solid grey', margin:'30px'}}>
                <img style={{width:'100%'}} src={s1} alt="" />
                <div style={{margin:'30px', marginBottom:'0px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <h3 className='text-2xl font-bold font-sans text-green-700'>EcoLoc T- Shirt</h3>
                    <h2 className='text-5xl text-slate-500 font-bold font-sans'>200 <i style={{color:'orange'}} class="fa-brands fa-bitcoin"></i></h2>
                </div>
            </div>


            <div className='hover:opacity-50 cursor-pointer' style={{width:'350px', backgroundColor:'whitesmoke', borderRadius:'50px', overflow:'hidden', boxShadow:3, border: '1px solid grey', margin:'30px'}}>
                <img style={{width:'100%'}} src={s2} alt="" />
                <div style={{margin:'30px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <h3 className='text-2xl font-bold font-sans text-green-700'>EcoLoc Cap</h3>
                    <h2 className='text-5xl text-slate-500 font-bold font-sans'>300 <i style={{color:'orange'}} class="fa-brands fa-bitcoin"></i></h2>
                </div>
            </div>


            <div className='hover:opacity-50 cursor-pointer' style={{width:'350px', backgroundColor:'whitesmoke', borderRadius:'50px', overflow:'hidden', boxShadow:3, border: '1px solid grey', margin:'30px'}}>
                <img style={{width:'100%'}} src={s3} alt="" />
                <div style={{margin:'30px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <h3 className='text-2xl font-bold font-sans text-green-700'>EcoLoc Hoodie</h3>
                    <h2 className='text-5xl text-slate-500 font-bold font-sans'>500 <i style={{color:'orange'}} class="fa-brands fa-bitcoin"></i></h2>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Redeem