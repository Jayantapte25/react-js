import { NavLink } from "react-router-dom";

export const Card = ({ movie }) => {
  return (
    <div>
      <div className="max-w-sm m-3 h-[96%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <NavLink to={`/movies/${movie.id}`}>
          <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </NavLink>
        <div className="p-5">
          <NavLink to={`/movies/${movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
          </NavLink>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}
