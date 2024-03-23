import MovieItem from "./MovieItem";


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