import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { Wrapper , CatCard} from '../Components';

const ItemExplore = () => {

    const {category , subcategory} = useParams();
    const [item, setitem] = useState([]);

    
  return (
    <Wrapper>
    <h1 className="mt-[5vh] font-montserrat font-bold text-2xl ">
      Select Your Subcategory
    </h1>
    <div className='mt-[10vh] px-[5vw]'>
    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-[5vh]'>
        {item?.data?.map((item) => (
            <CatCard image = {item?.img} name = {item?.name} cardid={item?._id} key = {item?._id} link = {`#`}/>
        ))}
    </div>
    </div>
</Wrapper>
  )
}

export default ItemExplore