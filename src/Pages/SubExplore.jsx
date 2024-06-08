import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { Wrapper , CatCard} from '../Components';

const SubExplore = () => {

    const [subcat, setsubcat] = useState([]);
    const {category} = useParams();

    const fetchsubcategory = async() => {
        const res = await fetch(`https://ewfl-backend-hemant2335.vercel.app/edevice/categories/${category}/subcategories`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
        const data = await res.json();
        console.log(data);
        setsubcat(data);
      }

    useEffect(() => {
        fetchsubcategory();
    }, [])

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