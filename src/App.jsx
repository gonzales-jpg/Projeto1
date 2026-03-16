import { useEffect, useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado"
  
function App() {
// Hooks - useState - Manipula o estado da variavél
// Na progamação orientada a objeto é chamdo de get e set
//Mais seguro 
//o parametro dentro do parenteses representa o default
// Não precisa passar como parametro é global
// variavél - função
const [peso, setPeso] = useState(0); 
const [altura, setAltura] = useState(0);
const [resultado, setResultado] = useState(0);
const [mostraresultado, setMostrarResultado] = useState(false);


// Função calcumar imc
const calcularImc=()=>{
  if (peso > 0 && altura >0){
  
    const imc = peso/(altura**2);
      setResultado(imc);
    
  }else{
    alert('Insira os valores válidos')
  }
}

//Efeito colateral para mostrar o resulado
useEffect(()=>{
  //condicional ternaria, se o resultado for maor que 0 mostra na tela
  resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false)
  // o efeito só roda quando a variavél resultado for alterada
},[resultado])

  return (
    <>
      <section className="container" >
        <div className="box" >
        <Header/>
        <form>
          <div>
            <label htmlFor="altura">Altura<span>(ex:1.80)</span></label>
            <input
            id="altura"
            type="number"
            step="0.01" /* //permite o uso de ponta e vírgula, casas decimais   */
            placeholder="Digite sua altura:"
            onChange={({target})=>setAltura(parseFloat(target.value))} /**Pega o valor do campo */
            /> 
            
          </div>
              <div>
            <label htmlFor="peso">Altura<span>(ex: 80kg)</span></label>
            <input
            id="peso"
            type="number"
            step="0.01" /* //permite o uso de ponta e vírgula, casas decimais   */
            placeholder="Digite sua altura:"
            onChange={({target})=>setPeso(parseFloat(target.value))} /**Pega o valor do campo */
            /> 
          </div>
            <button type="button" onClick={calcularImc}>Calcular</button>
        </form>
        </div>
        <div>
          {mostraresultado &&(
            //Envia o valor formatado com duas casa decimais via props para o componente resultado
            <Resultado resultado={resultado.toFixed(2)}/>

          )}

        </div>
      </section>
    </>
  )
}

export default App
