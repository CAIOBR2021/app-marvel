import { useState } from "react";
import Banner from "./Components/Banner";
import Formulario from "./Components/Formulario";
import Time from "./Components/Time";
import Rodape from "./Components/Rodape";

function App() {
  const times = [
    {
      nome: "Avengers",
      corPrimaria: "#EC1D24",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "X-Men",
      corPrimaria: "#D58930",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Fantastic Four",
      corPrimaria: "#407FB2",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Guardians of the Galaxy",
      corPrimaria: "#E59BE9",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "The Defenders",
      corPrimaria: "#273910",
      corSecundaria: "#F0F8E2",
    },

  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
