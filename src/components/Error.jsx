import styled from "@emotion/styled"
import { PropTypes } from 'prop-types'

const Texto = styled.p`
    background-color: #b7233c;
    color: #fff;
    padding: 15px;
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
`



const Error = ({ children }) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

Error.propTypes = {
  children: PropTypes.string.isRequired
}

export default Error