import React, { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react';
import instance from '../instance';




function Banner({fetchUrl}) {
 /*  console.log(fetchUrl); */
const [movie,setmovie] = useState()

const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData  = async()=>{
    const {data} = await instance.get(fetchUrl)
   setmovie(data.results[Math.floor(Math.random()*data.results.length)]);
  }
console.log(movie);


 useEffect(()=>{
fetchData()
},[])
 
  return (
  
    <div style={{height:"600px" ,backgroundImage:`url( ${base_url }${movie?.backdrop_path})`, backgroundPosition:'center',backgroundSize:"cover" ,backgroundAttachment:'fixed'}}>


<div className='banner-content'>
<h1>{movie?.title}</h1>
  <button className='btn btn-danger'>Play</button>
  <button className='btn border-white text-white ms-3'>More Info  <i class="fa-solid fa-caret-down"></i></button>
     <h2>{movie?.overview.slice(0,200)}....</h2>
    
    </div>

     
    </div>
  )
}

export default Banner