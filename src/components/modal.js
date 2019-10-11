import React, { useState } from "react"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"
import {MdClear} from "react-icons/md"
import { theme } from "./styled/theme"
import Button from "./button"

const StyledModal = styled(animated.div)`
  position: fixed;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const StyledCard = styled(animated.div)`
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align:center;
`
const Modal = ({ closeModal, animation, pointerEvents,children }) => {
  return (
    <StyledModal style={{ pointerEvents }}>
      <StyledCard style={animation}>
	  <MdClear onClick={closeModal} color="red" size="1.5em" style={{position:'absolute',top:'10%',right:'7%'}}/>
        {children}
      </StyledCard>
    </StyledModal>
  )
}

const ModalWrapper = ({children,hey}) => {
  const [on, toggle] = useState(false)
  const transition = useTransition(on, null, {
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)"},
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
  })
  const pointerEvents = on ? "all" : "none"
  return (
    <div>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              key={key}
              pointerEvents={pointerEvents}
              animation={animation}
              closeModal={() => toggle(false)}
			  children={children}
            />
          )
      )}
      <Button
        color={theme.light.orange}
        size="1em"
        radius=".5em"
        onClick={() => toggle(!on)}
      >
        Book Now
      </Button>
    </div>
  )
}

export default ModalWrapper
