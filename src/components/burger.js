import React from "react"
import { bool, func } from "prop-types"
import { StyledBurger } from "./styled/styledBurger"

const Burger = ({ toggle, setToggle }) => {
  return (
    <StyledBurger toggle={toggle} onClick={() => setToggle(!toggle)}>
      <div />
      <div style={{width:'1rem'}}/>
      <div />
    </StyledBurger>
  )
}
Burger.propTypes = {
  toggle: bool.isRequired,
  setToggle: func.isRequired,
}

export default Burger
