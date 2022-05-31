import Card from "../Card/Card";
import './List.css';

function List (props){
    
    return(
        <div className="ContainerCards">
            
            <div className="campFiltro">
            <span>Resumo financeiro</span>
            <button onClick={(event)=> event.target.style.background="#FD377E" } className="filtro">Todos </button>
            <button onClick={(event)=> event.target.style.background="#FD377E"} className="filtro">Entrada</button>
            <button onClick={(event)=> event.target.style.background="#FD377E"} className="filtro">Saída</button>
            </div>
            <div className="divisao">
            {props.listTransactions.map((item,index)=>(
               <Card transaction={item} key={index} handleTodo={props.handleTodo}/>
            ))}
            </div>
 
        </div>


    )

}

export default List