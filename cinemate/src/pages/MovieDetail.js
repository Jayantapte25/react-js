import React from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movieData, setmovieData] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c053bf2d012774b75b8ee2afaccad8e0&language=en-US`
      );
      const data = await response.json();
      setmovieData(data);
    }
    fetchMovie();
  }, [id]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex justify-center">
      <div className="flex justify-around flex-wrap py-28 max-w-7xl">
      <div className="max-w-2xl">
        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="" className="rounded" />
      </div>
      <div className="max-w-2xl text-gray-700 text-lg dark:text-white pt-8 sm:p-12">
        <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movieData.original_title}</h1>
        <p className="my-4">{movieData.overview}</p>
        <p className="my-7 flex flex-wrap gap-2">
          {movieData.genres.map((genre) => (
            <span key={genre.id} className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2">
              {genre.name}
            </span>
          ))}
        </p>
        <div className="flex items-center">
          <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="ml-2 text-gray-900 dark:text-white">{movieData.vote_average}</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className="text-gray-900 dark:text-white">{movieData.reviews} reviews</span>
        </div>
        <p className="my-4"><span className="mr-2 font-bold">Runtime:</span>{movieData.runtime}<span> min.</span></p>
        <p className="my-4"><span className="mr-2 font-bold">Budget:</span>{movieData.budget}</p>
        <p className="my-4"><span className="mr-2 font-bold">Revenue:</span>{movieData.revenue}</p>
        <p className="my-4"><span className="mr-2 font-bold">Release Date:</span>{movieData.release_date}</p>
        <p className="my-4"><span className="mr-2 font-bold">IMDB Code:</span><a href={`https://www.imdb.com/title/${movieData.imdb_id}`} target="_blank" rel="noreferrer">{movieData.imdb_id}</a></p>
      </div>
      </div>
    </section>
  );
};
