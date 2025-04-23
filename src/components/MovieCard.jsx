// import { Link } from "react-router-dom";

// import { FaStar } from "react-icons/fa";

// const imagesURL = import.meta.env.VITE_IMG;

// const MovieCard = ({ movie, showLink = true }) => {
//   return (
//     <div className="movie-card">
//       <img src={imagesURL + movie.poster_path} alt={movie.title} />
//       <h2>{movie.title}</h2>
//       <p>
//         <FaStar /> {movie.vote_average}
//       </p>
//       {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
//     </div>
//   );
// };

// export default MovieCard;


import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user?.email;
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
    const favoritosUsuario = favoritos[email] || [];

    setFavorito(favoritosUsuario.includes(movie.id));
  }, [movie.id]);

  const toggleFavorito = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user?.email;
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
    const favoritosUsuario = favoritos[email] || [];

    let novosFavoritos;
    if (favoritosUsuario.includes(movie.id)) {
      novosFavoritos = favoritosUsuario.filter(id => id !== movie.id);
    } else {
      novosFavoritos = [...favoritosUsuario, movie.id];
    }

    favoritos[email] = novosFavoritos;
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    setFavorito(!favorito);
  };

  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}

      {/* Botão*/}
      <button onClick={toggleFavorito} style={{ marginTop: "10px" }}>
        {favorito ? "★ Remover dos Favoritos" : "☆ Adicionar aos Favoritos"}
      </button>
    </div>
  );
};

export default MovieCard;
