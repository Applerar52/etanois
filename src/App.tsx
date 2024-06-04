import { useEffect, useState } from "react";
import styled from "styled-components";

const Conteiner = styled.div `
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

const Input = styled.input `
margin: 10px;
padding: 10px;
width: 200px;
`;

const Button = styled.button`
padding: 10px 20px;
cursor: pointer;
`;

const Resultado = styled.button`
margin-top: 20px;

`;

export default () => {
  
  const [gasolina, setGasolina] = useState('');
  const [etanol,   setEtanol]   = useState('');
  const [calculo,  setCalculo]  = useState('');
  const [resp,     setResp]     = useState('');

  const handlesCalculate = () => {
  setCalculo(etanol / gasolina);
  
 };

  useEffect( () => {
    if ( calculo <= 0.7) {
    setResp('Etanol');
  }
  else{
    setResp('Gasolina');
  }}, [calculo])

  return(
  <Conteiner>
    <Input type="number"
            placeholder="Informe o valor da Gasolina"
            onChange={t => setGasolina(t.target.value)}
            value={gasolina}
    />
    
    <Input type="number"
           placeholder="Informe o valor da Etanol"
           onChange={t => setEtanol(t.target.value)}
           value={etanol}
    />
  
  <Button onClick={handlesCalculate}>Calcular</Button>
  <Resultado>Valor obtido { calculo}%</Resultado>
  <Resultado>Abasteça com {resp} </Resultado>

  </Conteiner>
  )
}