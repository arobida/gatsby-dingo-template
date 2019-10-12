import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import useMeasure from "../hooks/useMeasure"
import { Link } from "gatsby"

const Accordion = ({ toggle, children }) => {
  const [on, set] = useState(false)
  const [bind, { height, top }] = useMeasure()
  const animation = useSpring({
    overflow: "hidden",
    boxShadow: "0 7px 6px -2px rgba(0, 0, 0, 0.5)",
    height: toggle ? height + top * 2 : 0,
  })
  const test = () => {
    set(!on)
    console.log(on)
  }
  return (
    <div>
      <animated.div style={animation}>
        <StyledDiv {...bind}>{children}</StyledDiv>
      </animated.div>
    </div>
  )
}
const StyledDiv = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  padding: 20px;
  border: solid 1px #eee;
  overflow: hidden;
`

export default Accordion
