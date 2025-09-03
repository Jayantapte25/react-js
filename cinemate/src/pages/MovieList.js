import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../components";

export const MovieList = ({ movieSection, setMovieSection, isSearch, setIsSearch }) => {

  const [movies, setMovies] = React.useState([]);
  const location = useLocation();
  let searchTerm;

  if (isSearch) {
    const params = new URLSearchParams(location.search);
    searchTerm = params.get("query");
  }

  React.useEffect(() => { 
    async function fetchMovies() {
      const response = await fetch(movieSection);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, [movieSection]);

  return (
    <main>
      <div className="max-w-7xl mx-auto py-7">
        {isSearch && <h2 className="text-2xl font-bold mb-4 dark:text-white">Search Results for {searchTerm}</h2>}
        <div className="flex justify-center flex-wrap">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />
          })}
        </div>
      </div>
    </main>
  )
}
