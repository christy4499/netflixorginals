import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'



function Row({title,   fetchUrl , isposter}) {
  console.log(fetchUrl);
  const base_url = "https://image.tmdb.org/t/p/original/";

 const[allMovie , setAllMovies]  = useState()

const fetchData = async ()=>{
  const {data} = await instance.get(fetchUrl)
 setAllMovies(data.results);
}
console.log(allMovie);

useEffect(()=>{
fetchData()
},[])

  return (
    <div className='row'><h1>{title}</h1>
    <div className='row2'> 
    
    {

      allMovie?.map(item=>(
    <img  className={`movie ${isposter && 'movie-poster'}`} src={`${base_url}${isposter?item.poster_path:item.backdrop_path}`} alt="no" />
      ))
    }
     </div>
    </div>
  )
}

export default Row