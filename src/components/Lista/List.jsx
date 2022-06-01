import Card from "../Card/Card";
import './List.css';

function List ({listTransactions,
    
    filtrado,
    setFiltrado,
    handleTodo,
    filtroBTN,
    listFiltrada,
    setlistFiltrada}){
    
        function btn (type){
            setFiltrado(true)
            setlistFiltrada(filtroBTN(type))
          
        }
    return(
        <div className="ContainerCards">
            
            <div className="campFiltro">
            <span>Resumo financeiro</span>
            <button onClick={()=> btn("Todos")} value="Todos" className="filtro">Todos </button>
            <button onClick={(event)=> btn(event.target.value)} value="Entrada" className="filtro">Entrada</button>
            <button onClick={(event)=> btn(event.target.value)} value="Saída" className="filtro">Saída</button>
            </div>
            <div className="divisao">
            { filtrado ? (
                    <>
                    {listFiltrada.map((item,index)=>(
               <Card transaction={item} key={index} handleTodo={handleTodo}/>
                ))}
                    </>
            )
            :
            (
                <>
                  {listTransactions.map((item,index)=>(
               <Card transaction={item} key={index} handleTodo={handleTodo}/>
                ))}
                </>
            )}        
            </div>
 
        </div>


    )

}

export default List