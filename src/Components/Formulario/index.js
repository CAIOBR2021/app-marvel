import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {


  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome, 
      cargo, 
      imagem,
      time
    })
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do personagem.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do personagem da Marvel"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="nome verdadeiro"
          placeholder="Digite o nome verdadeiro do personagem"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true} 
        label="Grupo" 
        itens={props.times} 
        valor={time}
        aoAlterado = {valor => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
