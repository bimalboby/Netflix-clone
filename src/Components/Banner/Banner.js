import React,{useEffect} from 'react'
import {API_KEY} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    useEffect(() => {
      
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data);
})
    }, [])
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">List</button>
                </div>
                <h1 className="discription"> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
