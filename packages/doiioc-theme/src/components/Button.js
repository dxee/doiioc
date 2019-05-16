import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
  background: ${props => props.theme.bg};
  color: rgb(102, 102, 102);
  line-height: 1.05;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  border: none !important;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  margin-left: 20px;
  ${props => props.book && 'margin-left: 15px;'}
    text-decoration: none;
    background: transparent;
  }
`

export const LinkButton = styled(Button)`
  font-size: 0.9;
  border: none;
  text-decoration: underline;
  &:hover {
    border: none;
  }
`
