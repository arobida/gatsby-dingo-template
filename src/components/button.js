import React from "react"
import StyledButton from "./styles/styledButton"

const Button = ({ children,size, color, shadow, radius,onClick }) => {
  return (
    <StyledButton size={size} color={color} shadow={shadow} radius={radius} onClick={onClick}>
      {children}
      <span className="spans"></span>
      <span className="spans"></span>
      <span className="spans"></span>
      <span className="spans"></span>
      <b className="bs" aria-hidden="true">
        {children}
      </b>
      <b className="bs" aria-hidden="true">
        {children}
      </b>
      <b className="bs" aria-hidden="true">
        {children}
      </b>
      <b className="bs" aria-hidden="true">
        {children}
      </b>
    </StyledButton>
  )
}
export default Button
