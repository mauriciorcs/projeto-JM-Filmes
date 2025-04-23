import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar"; 
import "./Favoritos.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Favoritos = () => {
  const [filmesFavoritos, setFilmesFavoritos] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user?.email;
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
    const favoritosUsuario = favoritos[email] || [];

    const fetchFavoritos = async () => {
      const promises = favoritosUsuario.map((id) =>
        fetch(`${moviesURL}${id}?${apiKey}`).then((res) => res.json())
      );
      const filmes = await Promise.all(promises);
      setFilmesFavoritos(filmes);
    };

    if (favoritosUsuario.length > 0) {
      fetchFavoritos();
    }
  }, []);

  const handleRemoveAllFavorites = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user?.email;
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
    favoritos[email] = [];
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    setFilmesFavoritos([]);
  };

  return (
    <div className="container">
      <Navbar />

      <h2 className="title">Meus Favoritos:</h2>
      
      <button onClick={handleRemoveAllFavorites} className="remove-all-button">
        Remover Todos
      </button>

      <div className="movies-container">
        {filmesFavoritos.length > 0 ? (
          filmesFavoritos.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Você ainda não favoritou nenhum filme.</p>
        )}
      </div>
    </div>
  );
};

export default Favoritos;
