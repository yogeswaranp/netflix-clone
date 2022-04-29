import axios from './axios';
import React, { useEffect, useState } from "react";
import requests from "./requests";
import './Banner.css';



function Banner(){
    const [Movie, setMovie]=useState([]);
    useEffect( ()=>{
        async function fetchData(){
            const request =await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[  Math.floor(Math.random()*request.data.results.length -1)]);
          return request;
        }
        fetchData();
    },[]);

    function trancate (str, n) {
        return str?.length>n? str.substr(0,n-1)+"...": str ;
    }
    
    return(
        <header className='banner'
        style={{
            backgroundImage:`url( "https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
            backgroundPosition:"center",
            backgroundSize:"cover",

        }}>
            <div className='banner_contents'>
                {/* title */}
                <h1 className='banner_title'>
                    {Movie?.title || Movie?.name || Movie?.original_name}
                </h1>
                {/* 2 button */}
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>

                </div>
                {/* description */}
                <h1 className='banner_description'>{trancate(Movie?.overview,150)} </h1>
                

            </div>
            <div className='banner-fade'></div>


        </header>
    )
}
export default Banner;