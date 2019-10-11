import React, { useState, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { animated, useSpring, config } from "react-spring"
import { theme } from "./styled/theme"
import useListener from "../hooks/useListener"
import logo from "../images/gatsby-icon.png"
import Modal from "./modal"
import Links from "./links"
import Burger from "./burger"
import Accordion from "./accordion"

const Navigation = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navLinks {
            name
            link
          }
        }
      }
    }
  `)
  const [attach, set] = useState(true)
  const [toggle, setToggle] = useState(false)
  const sticky = e => {
    const win = typeof window !== "undefined" ? window : null
    if (win.scrollY >= 70) {
      set(false)
    }
    if (win.scrollY <= 0) {
      set(true)
    }
  }
  useListener("scroll", sticky)

  const stick = useSpring({
    position: attach ? "absolute" : "fixed",
    background: attach ? "rgb(255, 255, 255,0)" : theme.primaryLight,
    boxShadow: attach
      ? "0 0px 0px rgba(0,0,0,0)"
      : "0 5px 15px rgba(0, 0, 0, 0.5)",
    transform: attach ? `translate3d(0,-100%,0)` : `translate3d(0,0%,0)`,
    config: config.slow,
  })
  const slide = useSpring({})
  return (
    <>
      <animated.nav
        style={{
          zIndex: "50",
          width: "100%",
          height: `${"4em"}`,
          marginTop: attach ? "4em" : "0",
          ...stick,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".4em",
          }}
        >
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: "2em" }} />
          </Link>
          {!props.mobile && <Links data={data} />}
          <Modal>
            <h1>Book Your Next Event</h1>
            <p>With Davis Family Catering</p>
          </Modal>
          {props.mobile && (
            <div>
              <Burger toggle={toggle} setToggle={setToggle} />
            </div>
          )}
        </div>
        <Accordion toggle={toggle}>
          <Links data={data} mobile={props.mobile} />
        </Accordion>
      </animated.nav>
      <div style={{ paddingTop: `${attach ? 4 : -4}em` }}></div>
    </>
  )
}

export default Navigation
