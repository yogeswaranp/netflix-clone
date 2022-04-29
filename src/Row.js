import axios from "./axios";
import React, { useEffect, useState } from "react";
import './Row.css';
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}){
    
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
   
    useEffect(()=>{
     async function fetchData(){
          const request = await axios.get(fetchUrl);
          
         setMovies(request.data.results);
          return request;
     }
     fetchData();
    }, [fetchUrl]);

 
        // const opts = {
        //     height: "390",
        //     width: "100%",
        //     playerVars: {
        //         autoplay: 1,
        //       // origin: 'http://localhost:3000' ,
        //      //  orgin: "window.location"
        //     // host: `${window.location.protocol}//www.youtube.com`,
        //    // host: 'http://www.youtube.com',
        //     // origin: 'http://localhost:3000'
            
        //     }
        // }
        // const handleClick = (movie) => {
        //     if (trailerUrl) {
        //         setTrailerUrl("")
        //     } else {
        //         movieTrailer(movie?.name || "")
        //         .then(url => {
        //             const urlParams = new URLSearchParams(new URL(url).search)
        //             setTrailerUrl(urlParams.get('v'))
                   
        //         })
        //         .catch(error => console.log(error))
                
        //     }
        // }
        const opts = {
            height: "390",
            width: "100%",
            playerVars: {
                autoplay: 1
            }
        }
        const handleClick = (movie) => {
            if (trailerUrl) {
                setTrailerUrl("")
            } else {
                movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(error => console.log(error))
            }
        }
   
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie)=>(
                    <img 
                    onClick={()=>handleClick(movie)}
                    key={movie.id} 
                   
                    className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                    src={`${base_url}${ isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>

                ))}

            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts= {opts} />}

        </div>
    )
}
export default Row;