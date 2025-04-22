import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";  // Importando o Navbar
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado para lidar com erros

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Erro ao carregar os dados do filme.");
      }
      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Define o estado de carregamento como false quando a requisição terminar
    }
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    setLoading(true); // Set loading to true every time the id changes
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]); // Dependência do useEffect é o id, para chamar novamente se o id mudar

  if (loading) {
    return <p>Carregando...</p>; // Exibe uma mensagem de carregamento enquanto os dados não chegam
  }

  if (error) {
    return <p>Erro: {error}</p>; // Exibe uma mensagem de erro se houver falha ao buscar os dados
  }

  return (
    <div className="movie-page">
      {/* Adicionando o Navbar aqui */}
      <Navbar />
      
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
