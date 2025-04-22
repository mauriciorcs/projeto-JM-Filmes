import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 
// import Container from "../../components/Container";
import InputText from "../../components/InputText";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "usuario@example.com" && senha === "123456") {
      localStorage.setItem("token", "fake-token");
      navigate("/home"); 
    } else {
      alert("Email ou senha inválidos");
    }
  };

  const inputs = [
    {
      label: "Email",
      placeholder: "Digite seu Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      label: "Senha",
      placeholder: "Digite sua Senha",
      value: senha,
      onChange: (e) => setSenha(e.target.value),
    },
  ];

  return (
    <div className="container"> {/* Corrigido para classe CSS global */}
      <div className="forms"> {/* Corrigido para classe CSS global */}
        <div className="title">JM Filmes</div> {/* Corrigido para classe CSS global */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          {inputs.map((input, index) => (
            <InputText
              label={input.label}
              placeholder={input.placeholder}
              key={index}
              value={input.value}
              onChange={input.onChange}
            />
          ))}
        </div>
        <div className="buttom" onClick={handleSubmit}> {/* Corrigido para classe CSS global */}
          <div className="text">Entrar</div> {/* Corrigido para classe CSS global */}
        </div>
        <div className="textFooter"> {/* Corrigido para classe CSS global */}
          <h3>
            Não possui uma conta? <a href="/cadastro">Cadastre-se</a>
          </h3>
        </div>
      </div>
    </div>
  );
}
