import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css"; // Importando o CSS global corretamente
import InputText from "../../components/InputText";

export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
      alert("Este email já está cadastrado");
      return;
    }
  
    const newUser = { nome, email, senha };
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", "fake-token");
    navigate("/");
  };
  

  const inputs = [
    {
      label: "Nome",
      placeholder: "Digite seu Nome",
      value: nome,
      onChange: (e) => setNome(e.target.value),
    },
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
        <div className="title">Cadastro</div> {/* Corrigido para classe CSS global */}
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
          <div className="text">Cadastrar</div> {/* Corrigido para classe CSS global */}
        </div>
        <div className="textFooter"> {/* Corrigido para classe CSS global */}
          <h3>
            Já tem uma conta? <a href="/">Faça Login</a>
          </h3>
        </div>
      </div>
    </div>
  );
}
