import { Route, Routes } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound } from "../pages"

export const AllRoutes = ({ movieSection, setMovieSection, isSearch, setIsSearch }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList movieSection={movieSection} setMovieSection={setMovieSection}/>} />
                <Route path="movies/top" element={<MovieList movieSection={movieSection} setMovieSection={setMovieSection}/>} />
                <Route path="movies/popular" element={<MovieList movieSection={movieSection} setMovieSection={setMovieSection}/>} />
                <Route path="movies/upcoming" element={<MovieList movieSection={movieSection} setMovieSection={setMovieSection}/>} />
                <Route path="movies/:id" element={<MovieDetail movieSection={movieSection} setMovieSection={setMovieSection}/>} />
                <Route path="search" element={<MovieList movieSection={movieSection} setMovieSection={setMovieSection} isSearch={isSearch} setIsSearch={setIsSearch}/>} />
                <Route path="*" element={<PageNotFound movieSection={movieSection} setMovieSection={setMovieSection}/>} />
            </Routes>
        </>
    )
}
