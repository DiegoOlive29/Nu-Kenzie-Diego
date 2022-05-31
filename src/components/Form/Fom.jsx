import { useState } from "react";
import "./Form.css";

function FormDados(props) {
  let [description, setDescription] = useState("");

  let [type, setType] = useState("");

  let [value, setValue] = useState("");

  return (
    <div className="container">
      <label type="text">Descrição</label>
      <input
        className="description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <div className="box">
        <label text="">Valor</label>
        <input
          className="valor"
          type="number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>

      <div className="box">
        <span>Tipo de Valor</span>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option> </option>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>

      <button
        onClick={() =>
          type !== "" ? props.addTodo(description, type, value)  : ""
        }
      >
        Inserir Valor
      </button>
    </div>
  );
}
export default FormDados;
