import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  

    if (email === "usuario@example.com" && senha === "123456") {
      handleLogin();  
    } else {
      alert("Email ou senha inválidos");
    }
  };

  const handleLogin = () => {
    const userData = {
      email: email,
      nome: "Usuário Exemplo"
    };
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/home");
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="title">JM Filmes</div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="input"
            />
          </div>

          <button type="submit" className="btn-login">Entrar</button>
        </form>

        <div className="footer">
          <p>
            Não possui uma conta? <a href="/cadastro">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}
