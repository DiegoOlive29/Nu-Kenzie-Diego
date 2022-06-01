import { useState } from "react";
import HeaderJs from "./components/Header/Header";
import FormDados from "./components/Form/Fom";
import List from "./components/Lista/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [filtrado, setFiltrado] = useState(false);
  const [listFiltrada, setlistFiltrada] = useState([]);

  function handleTodo(remove) {
    const novos = listTransactions.filter((item) => item.id !== remove);
    setListTransactions(novos);
  }

  function filtroBTN(filtro) {
    if (filtro === "Todos") {
      setFiltrado(false);
      return [...listTransactions];
    } else {
      const listaFiltrada = [...listTransactions].filter(
        (item) => item.type === filtro
      );
      return listaFiltrada;
    }
  }

  return (
    <>
      <ToastContainer />
      <div>
        <HeaderJs />

        <main className="containerMain">
          <div className="containerForm">
            <FormDados
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              setFiltrado={setFiltrado}
              listFiltrada={listFiltrada}
              setlistFiltrada={setlistFiltrada}
            />

            <TotalMoney listTransactions={listTransactions} />
          </div>

          <List
            listTransactions={listTransactions}
            listaFiltrada={filtroBTN}
            filtrado={filtrado}
            setFiltrado={setFiltrado}
            handleTodo={handleTodo}
            filtroBTN={filtroBTN}
            listFiltrada={listFiltrada}
            setlistFiltrada={setlistFiltrada}
          />
        </main>
      </div>
    </>
  );
}

export default App;
