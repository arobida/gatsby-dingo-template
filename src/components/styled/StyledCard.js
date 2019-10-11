import styled from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .cards {
    border: 1px solid rgb(224, 224, 224);
    border-radius: 100px 0px 623px 77px/0px 50px 128px 58px;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    width: 20em;
    height: 32em;
    margin: 1em;
  }
`
export default StyledCard
