import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'


function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [urlId,setUrlId]=useState("")
    useEffect(() => {
        axios.get(props.url).then((res)=>{
            console.log(res.data);
            setMovie(res.data.results)
        }).catch(err=>{
            alert('Error')
        })
      }, [])
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          
          autoplay: 1,
        },
    }
    const handleMovie=(id)=>{

        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
            if(response.data.results.length!==0)
            {
                setUrlId(response.data.results[0])
            }else{
                console.log("API called but the DB is empthy for this movie");
            }

        })
    }
    return (
       
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">

            { movie.map((obj)=>
                 <img onClick={()=>handleMovie(obj.id)}  className={props.isSmall ? "smallPoster " :"poster"} src={`${imageUrl+obj.backdrop_path}`}  />

            )}
                </div>
              { urlId && <Youtube opts={opts} id={urlId.key} /> }
            
        </div>
    )
}

export default RowPost
  