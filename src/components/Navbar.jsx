import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import Home from "../pages/Home"

import "./Navbar.css"

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`, { replace: true })
    setSearch("")
  }

  const goToFavoritos = () => {
    navigate("/favoritos");
  };

  return (
<nav id="navbar">
  <h2>
    <Link to="/home">
      <BiCameraMovie /> JM Filmes
    </Link>
  </h2>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <button onClick={goToFavoritos} className="favoritos-button">
      Favoritos
    </button>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busque um filme"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </form>
  </div>
</nav>

  );
};


export default Navbar;
