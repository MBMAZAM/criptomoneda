
import styled from "@emotion/styled"
import { PropTypes } from 'prop-types'
import { useState } from "react"


const Label = styled.label`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
  margin-top: 2rem;
  display: block;
`
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  border-radius: 15px;
  padding: 14px;
`

const useSelectMonedas = (label, monedas) => {

  const [state, setState] = useState('')
  const SelectMonedas = () => (
    <>
      <Label htmlFor="">{label}</Label>
      <Select name="" id="" value={state} onChange={e => setState(e.target.value)}>
        <option value="">Seleccione</option>
        { monedas.map( moneda => (
            <option
              key={moneda.id}
              value={moneda.id}
            >
              {moneda.nombre}
            </option>
        ))}
      </Select>
    </>
  )

  return [state, SelectMonedas]

}

useSelectMonedas.propTypes = {
  label: PropTypes.string.isRequired,
  opciones: PropTypes.array.isRequired
}

export default useSelectMonedas

