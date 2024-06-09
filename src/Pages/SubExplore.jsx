import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { Wrapper , CatCard} from '../Components';

const SubExplore = () => {

    const [subcat, setsubcat] = useState([]);
    const {category} = useParams();


  return (
    <Wrapper>
    <h1 className="mt-[5vh] font-montserrat font-bold text-2xl ">
      Select Your Subcategory
    </h1>
    <div className='mt-[10vh] px-[5vw]'>
    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-[5vh]'>
        {subcat?.map((item) => (
            <CatCard image = {item?.img} name = {item?.name} key = {item?._id} link = {`/explore/${category}/${item?.name}`}/>
        ))}
    </div>
    </div>
</Wrapper>
  )
}

export default SubExplore