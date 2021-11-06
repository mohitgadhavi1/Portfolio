import React, {useState} from 'react';
import AddMovie from './Data/AddMovie';
import MoviesList from './Data/MovieList';
import classes from './Netflix.module.scss';

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

function Netflix() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  async function fetchMovieHandler (){
    setIsLoading(true);
    setError(null);
    try{
      const response = await  fetch("https://swapi.dev/api/film");
      if(!response.ok){
        throw new Error("Something went wrong!");
      }
       const data = await response.json();
      const transformMovies = data.results.map(moviedata =>{
       return {
         id:moviedata.episode_id,
         title:moviedata.title,
         openingText:moviedata.opening_crawl,
         releaseDate:moviedata.release_date
       }
      });
     setMovies(transformMovies);
    
    }
    catch(error){
         setError(error.message)
    }
    setIsLoading(false);
  }
  async function addMovieHandler(movie) {
    const response = await fetch("https://portfolio-b47c5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",{
      method:'POST',
      body:JSON.stringify(movie),
      headers:{
        'content-type':'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
        <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section className={classes.buttonSection}>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section  >
      {!isLoading && <MoviesList movies={movies} /> }
      {isLoading && <p>Loading..</p>}
      {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default Netflix;
