import { PropTypes } from 'prop-types'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useEffect, useState } from 'react'
import Error from './Error'

const InputSubtmit = styled.input`
    color: #fff;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    font-size: 20px;
    width: 100%;
    display: block;
    background-color: #9497ff;
    margin: 20px 0;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover {
        background-color: #6c63ff;
        cursor: pointer;
    }
`


const Form = ({ setMonedas }) => {
  const [criptos, SelectCripto] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
  const [criptomoneda, SelectCriptoMoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const ArrayCripto = resultado.Data.map(cripto => {

        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      SelectCripto(ArrayCripto)
    }
    consultarAPI()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes('')) {
      setError(true)
      return
    }

    setError(false)
    setMonedas({
      moneda,
      criptomoneda
    })
  }


  return (
    <>

      {error && <Error>Todos los campos son obligatorios </Error >}

      <form onSubmit={handleSubmit} action="">
        <SelectMonedas />
        <SelectCriptoMoneda />

        <InputSubtmit type="submit" value="Cotizar" />
      </form>
    </>
  )
}

Form.propTypes  = {
  setMonedas: PropTypes.func.isRequired
}

export default Form
