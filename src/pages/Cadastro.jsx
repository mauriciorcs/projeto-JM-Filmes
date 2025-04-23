import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de validação
    if (email === "usuario@example.com") {
      alert("Este email já está cadastrado");
      return;
    }

    setShowModal(true);

    setTimeout(() => {
      navigate("/login");
    }, 1000); 
  };

  return (
    <div className="cadastro-container">
      <div className="forms">
        <div className="title">Cadastro</div>

        <form onSubmit={handleSubmit} className="form-container">
          {/* Campo de Nome */}
          <div className="input-group">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="buttom">
            <button type="submit" className="btn-cadastrar">
              Cadastrar
            </button>
          </div>
        </form>

        <div className="textFooter">
          <h3>
            Já tem uma conta? <a href="/login">Faça Login</a>
          </h3>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Cadastro concluído!</h3>
          </div>
        </div>
      )}
    </div>
  );
}