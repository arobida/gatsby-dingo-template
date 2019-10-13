import React from "react"
import StyledButton from "./styled/styledGhostBtn"

const Button = ({
  children,
  size,
  color,
  shadow,
  radius,
  onClick,
  paddingX,
  paddingY,
  border,
}) => {
  return (
    <StyledButton
      size={size}
      color={color}
      shadow={shadow}
      radius={radius}
      onClick={onClick}
      paddingX={paddingX}
      paddingY={paddingY}
      border={border}
    >
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
