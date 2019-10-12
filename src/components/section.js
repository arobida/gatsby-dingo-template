import React from "react"
import styled from "styled-components"

const Section = props => {
  return <StyledSection>{props.children}</StyledSection>
}
const StyledSection = styled.section`
  max-width: 80vw;
  @media (max-width: 570px) {
    min-height: 100vh;
    max-width: 100vw;
  }
  padding: 1em;
`

export default Section
