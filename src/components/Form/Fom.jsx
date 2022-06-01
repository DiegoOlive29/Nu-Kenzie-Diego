import { useState } from "react";
import { toast } from "react-toastify";
import "./Form.css";

function FormDados(props) {
  const [description, setDescription] = useState("Sem descrição.");

  const [type, setType] = useState("Entrada");

  const [value, setValue] = useState(0);

  const [id, setId] = useState(0);
  
  function addTodo(description, type, value) {
    if (type === "Saída" && value < 0) {
      
    }  else if( type ==="Saída" && value > 0){
      console.log("oi")
      value = value *-1
    }
    const newItem = {
      description: description,
      type: type,
      value: value,
      id: id,
    };
    setId(id + 1);

    if(newItem.value !== 0 ){

      props.setListTransactions([...props.listTransactions, newItem]);
      toast.success("Transação feita com sucesso")

    }else{
      toast.error("Não é possivel enviar a transação sem o campo de valor ")

    }
    
    setDescription("Sem descrição")
    setValue(0)
    setType("Entrada")

    props.setlistFiltrada([...props.listFiltrada])
    props.setFiltrado(false)
    
    
  }

  return (
    <div className="container">
      <label type="text">Descrição</label>
      <input
        className="description"
        type="text"
        placeholder="Sem descrição."
        onChange={(event) => setDescription(event.target.value)}
      />

      <div className="box">
        <label text="">Valor</label>
        <input
          className="valor"
          type="number"
          value={value}
          placeholder={0}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>

      <div className="box">
        <span>Tipo de Valor</span>
        <select  value={type}  onChange={(event) => setType(event.target.value)}>
          <option> </option>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>

      <button
        onClick={() => addTodo(description, type, value)}
      >
        Inserir Valor
      </button>
    </div>
  );
}
export default FormDados;
