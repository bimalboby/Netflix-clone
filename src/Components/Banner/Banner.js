import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
      
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[5]);
    setMovie(response.data.results[12])
})
    }, [])
    return (
        
        <div className="banner"
        style={{ backgroundImage:`url( ${movie ? imageUrl+movie.backdrop_path :"empty"})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.title : "empty"}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">List</button>
                </div>
                <h1 className="discription"> {movie ? movie.overview :"empty"}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
