import styled from "@emotion/styled"
import { PropTypes } from 'prop-types'

const Container = styled.div`
  color: white;
  font-size: 18px;
  span {
    font-weight: bold;
  }
  display: flex;
  align-items: center ;
`

const Image = styled.img`
  width: 150px;
  margin-right: 20px;
  margin-top: 5px;
  display: block;


`

const Texto = styled.p`
  font-size: 18px;
  margin: 0;
  color: white;
  text-align: left;
`

const Precio = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  color: white;
  text-align: left;
`


const Resultado = ({ resultado }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;


  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Crypto" />
      <div>
      <Precio>El Precio es de: <span>{PRICE}</span></Precio>
      <Texto>El Precio más del día: <span>{HIGHDAY}</span></Texto>
      <Texto>El Precio bajo del día: <span>{LOWDAY}</span></Texto>
      <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>última Actualización: <span>{LASTUPDATE}</span></Texto>

      </div>
    </Container>
  )

}

Resultado.propTypes = {
  resultado: PropTypes.object.isRequired
}

export default Resultado