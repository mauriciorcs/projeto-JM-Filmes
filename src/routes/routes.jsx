import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Movie from "../pages/Movie";
import Search from "../pages/Search";
import Favoritos from "../pages/Favoritos";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}