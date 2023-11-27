import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
    setMovies(res.data.movies)
  }
  // await를 사용한 문법!
  useEffect(() => {
    // fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    // .then((res) => res.json())
    // .then((data) => {
    //   setMovies(data.data.movies);
    //   setLoading(false);
    // })
    getMovies();
    setLoading(false);
  },[])
  return (
    <div>
      {loading? <div>Now Loading...</div>: null}
      <h1>추천 작품</h1>
      <ul className='movies'>
      {movies.map((movie) => (
        <Movie
          coverImg = {movie.medium_cover_image}
          title = {movie.title}
          genres = {movie.genres}
          summary = {movie.summary}
          id = {movie.id}
          key={movie.id}/>
        )
        )}
      </ul>
    </div>
  );
}

export default Home;
