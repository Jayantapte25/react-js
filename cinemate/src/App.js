import React from 'react';
import './App.css';
import { Footer, Header } from './components/index';
import { AllRoutes } from './routes/AllRoutes';

function App() {

  const [movieSection, setMovieSection] = React.useState("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=c053bf2d012774b75b8ee2afaccad8e0");
  const [isSearch, setIsSearch] = React.useState(false);

  return (
    <div className="App dark:bg-gray-900">
      <Header movieSection={movieSection} setMovieSection={setMovieSection} isSearch={isSearch} setIsSearch={setIsSearch}/>
      <AllRoutes movieSection={movieSection} setMovieSection={setMovieSection} isSearch={isSearch} setIsSearch={setIsSearch} />
      <Footer />
    </div>
  );
}

export default App;
