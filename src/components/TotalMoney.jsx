import "./TotalMoney.css"

function TotalMoney(props){
    return(
        <div className="totalValor">
            <span className="campPrice">Valor total:</span> <span>R$:
                 {props.listTransactions.reduce((a,b)=> a + Number(b.value) ,0)}</span>


        </div>

    )


}export default TotalMoney