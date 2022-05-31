import "./Card.css"


function Card(props){
    return( 
        <>
        {props.transaction.type === "Entrada" ?(
        <div className="card">
            <div className="title"><span className="description">{props.transaction.description }</span>
            <span>R$: {props.transaction.value }</span>
            <button  onClick={()=>props.handleTodo(props.transaction.id)}>Remove</button></div>
            
            <span className="type">{props.transaction.type }</span>
        </div>)
        :(
            <div className="ofType">
                <div className="title"><span className="description">{props.transaction.description }</span>
                <span>R$: {props.transaction.value }</span>
                <button  onClick={()=>props.handleTodo(props.transaction.id)}>Remove</button></div>
            
                <span className="type">{props.transaction.type }</span>
            </div>)
        }
        </>
    )


}export default Card