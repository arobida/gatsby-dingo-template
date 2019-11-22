import React, { useState } from "react"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"

const StyledLinkBtn = styled(animated.button)`
  background: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 100px 0px 623px 77px/0px 50px 128px 58px;
`
const LinkBtn = props => {
  const [on, toggle] = useState(false)
  console.log(on)
  const effect = useSpring({
    borderBottom: !on ? "0px solid rgba(255, 61, 0, 1)" : "10px solid rgba(255, 61, 0, 1)"
  })
  return (
    <StyledLinkBtn onClick={() => toggle(!on)} style={{...effect}}>
      {props.children}
    </StyledLinkBtn>
  )
}

export default LinkBtn
