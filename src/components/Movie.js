import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../Movie.module.css';
function Movie({coverImg, title, genres, summary, id}) {
  return(
      <li>
        <img src={coverImg} alt={title}/>
        <div className={styles.movieInfo}>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <ul className={styles.genres}>
          {genres.map((g) =>(
            <li>{g}</li>
          ))}
          </ul>
        <p>{summary.length>235? `${summary.slice(0,235)}...`: summary}</p>
        </div>
      </li>
  )
}
Movie.propTypes = {
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
  summary : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired
}
export default Movie;