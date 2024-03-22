import MovieItem from "./MovieItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieList = ({movies}) => {
  return(
    <div>
    {movies.map((movie)=>(
    <>
        <MovieItem key={movie.imdbID} movie={movie}/>
            
    </>

            
   ))}
    </div>


 
  );
}




export default MovieList;