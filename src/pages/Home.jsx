// import { useEffect, useState } from "react";
// import MovieCard from "../components/MovieCard";
// import Navbar from "../components/Navbar"; 
// import "./MoviesGrid.css";

// const moviesURL = import.meta.env.VITE_API;
// const apiKey = import.meta.env.VITE_API_KEY;

// const Home = () => {
//   const [topMovies, setTopMovies] = useState([]);

//   const getTopRatedMovies = async (url) => {
//     const res = await fetch(url);
//     const data = await res.json();
//     setTopMovies(data.results);
//   };

//   useEffect(() => {
//     const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
//     console.log(topRatedUrl)
//     getTopRatedMovies(topRatedUrl)
//   }, [])

//   console.log(topMovies)

//   return (
//     <div className="container">
//       <Navbar />

//       <h2 className="title">Melhores filmes:</h2>
//       <div className="movies-container">
//         {topMovies.length > 0 &&
//           topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
//       </div>
//     </div>
//   )
// }

// export default Home;


import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const navigate = useNavigate(); // Hook para navegação 

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  const goToFavoritos = () => {
    navigate("/favoritos"); // Redireciona para a página de Favoritos
  };

  return (
    <div className="container">
      <Navbar />

      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      {/* Botão para navegar para Favoritos */}
      <button onClick={goToFavoritos} className="favoritos-button">
        Ir para Favoritos
      </button>
    </div>
  );
};

export default Home;
