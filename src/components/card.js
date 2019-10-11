import React from "react"
import StyledCard from "./styled/StyledCard"

const Card = props => {
  return <StyledCard>{props.children}</StyledCard>
}

export default Card
