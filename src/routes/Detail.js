import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const param = useParams();
  const [data, setData] = useState('');

  useEffect(function () {
    fetch('https://yts.mx/api/v2/movie_details.json?movie_id='+param.id)
    .then((res)=> res.json())
    .then((data)=>{
      setData(data.data.movie);
    })
  }, [param]);
 return (
  <div>
    <img src={data.background_image} alt={data.title}/>
    <div>
      <h2>
        {data.title}
      </h2>
      <p>{data.title_long}</p>
      <p>장르: {data.genres}
      </p>
      <p>⭐{data.rating} 👍{data.like_count}</p>
    </div>
  </div>
 ) 
}
export default Detail;