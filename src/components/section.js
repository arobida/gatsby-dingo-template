import React from "react"
import styled from "styled-components"

const Section = props => {
  return <StyledSection>{props.children}</StyledSection>
}
const StyledSection = styled.section`
  margin-left:5%;
  margin-right:5%;
  @media (max-width: 570px) {
    min-height: 100vh;
    max-width: 100vw;
    margin: 0;
  }
  padding: 1em;
`

export default Section
