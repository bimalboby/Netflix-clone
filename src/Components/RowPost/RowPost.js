import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'


function RowPost(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then((res)=>{
            console.log(res.data);
            setMovie(res.data.results)
        }).catch(err=>{
            alert('Error')
        })
      }, [])
    return (
       
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">

            { movie.map((obj)=>
                 <img className={props.isSmall ? "smallPoster " :"poster"} src={`${imageUrl+obj.backdrop_path}`}  />

            )}
                </div>
            
        </div>
    )
}

export default RowPost
  