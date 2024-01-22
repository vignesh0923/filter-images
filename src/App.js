import React from 'react'
import { Gallerydata } from './imagedata'
import { useEffect, useState } from 'react'
const App = () => {

  const [data,setData]=useState([]);
  const [collection,setCollection]=useState([]);

  useEffect(()=>{
    setData(Gallerydata)
    setCollection([...new Set(Gallerydata.map((item)=> item.title))])
  },[])


  const galleryfilter = (itemdata) =>{
    const filterdata=Gallerydata.filter((item)=>item.title == itemdata);
    setData(filterdata)
  }

  console.log(collection);
  return (
    <div>
      <div className='gallery-wrapper'>
        <div className='filteritem'>
          <ul>
            <li><button onClick={()=>setData(Gallerydata)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{galleryfilter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className='gallery-container'>
          {
            data.map((item)=><div key={item.id} className='galleryitem'><img src={item.image}/></div>)
          }
        </div>
      </div>
    </div>
  )
}

export default App