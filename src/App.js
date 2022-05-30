import HeaderJs from "./components/Header";
import { useState } from "react";
import FormDados from "./components/Fom";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Card from "./components/Card";

function App() {
  const [listTransactions, setListTransactions] = useState([])
const [id, setId]=useState(0)

function addTodo (description,type,value){
  const newItem = {description:description, type:type, value: value, id:id}

  

  setListTransactions([...listTransactions, newItem])
  setId(id+1)
}
function handleTodo(remove){
  const novos = listTransactions.filter((item)=> item.id !== remove)
  setListTransactions(novos)
}

function filtroBTN(filtro){
  console.log("Não esta funcionando.")
  
  if(filtro === "Todos"){
  listTransactions.map((item,index)=>(
    <Card transaction={item} key={index} handleTodo={handleTodo}/>
  ))
  }
 

  const list = listTransactions.filter((item)=> item.type === filtro)
  list.map((item,index)=>(
    <Card transaction={item} key={index} handleTodo={handleTodo}/>
  ))
}
  
  return (
  
    <>
    <body>
      <HeaderJs/>
   
    
      
      <main className="containerMain">
      <div>
      <FormDados listTransactions={listTransactions}
       setListTransactions={setListTransactions} addTodo={addTodo} />
      
      <TotalMoney listTransactions={listTransactions}/>
      </div>

      <List listTransactions={listTransactions} handleTodo={handleTodo} filtroBTN={filtroBTN}/>
      </main>
    </body>
    </>
  );
}

export default App;
