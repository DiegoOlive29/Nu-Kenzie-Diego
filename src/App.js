import { useState , } from "react";
import HeaderJs from "./components/Header/Header";
import FormDados from "./components/Form/Fom";
import List from "./components/Lista/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import Card from "./components/Card/Card";
import "./App.css"

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [id, setId] = useState(0);
  let dados = listTransactions 

  
  function addTodo(description, type, value) {
    if (type === "Saída") {
      value = value * -1;
    }
    const newItem = {
      description: description,
      type: type,
      value: value,
      id: id,
    };

    setListTransactions([...listTransactions, newItem]);
    setId(id + 1);
  }
  function handleTodo(remove) {
    const novos = listTransactions.filter((item) => item.id !== remove);
    setListTransactions(novos);
    dados =listTransactions
  }

  function filtroBTN(filtro) {
   

    if (filtro === "Todos") {
       dados = listTransactions
    }else if ( filtro === "Saída"){
      dados = listTransactions.filter ((item) => item.type === "Saída")
    }else{
      dados = listTransactions.filter ((item) => item.type === "Entrada")
    
    }

    const list = listTransactions.filter((item) => item.type === filtro);
    list.map((item, index) => (
      <Card transaction={item} key={index} handleTodo={handleTodo} />
    ));
    console.log(dados);
  }
  
  return (
    <>
      <body>
        <HeaderJs />

        <main className="containerMain">
          <div className="containerForm">
            <FormDados
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              addTodo={addTodo}
            />

            <TotalMoney listTransactions={listTransactions} />
          </div>

          <List
            listTransactions={dados}
            handleTodo={handleTodo}
            filtroBTN={filtroBTN}
          />
        
        </main>
      </body>
    </>
  );
}

export default App;
