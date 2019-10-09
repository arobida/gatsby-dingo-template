import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { animated, useSpring, config } from "react-spring"
import { theme } from "./styles/theme"
import useListener from "../hooks/useListener"
import logo from "../images/gatsby-icon.png"
import Modal from "./modal"

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
  const [attach,set] = useState(true)
  const sticky = e => {
    const navTop = window.scrollY<=75
    set(navTop)
    console.log(attach)
  }
  useListener("scroll", sticky)

  const stick = useSpring({
    position: attach ? "relative" : "fixed",
    background: attach ? theme.primaryLight : theme.primaryDark,
    config:config.slow
  })
  return (
    <animated.nav
      style={{
        zIndex: "50",
        width: "100%",
        height: "5em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "2em",
        paddingRight: "2em",
        ...stick,
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "2em" }} />
      </Link>
      <ul
        style={{
          display: "flex",
          flexDirection: `row`,
          justifyContent: "center",
          listStyle: "none",
        }}
      >
        {data.site.siteMetadata.navLinks.map(item => {
          return (
            <li key={item.name} style={{ padding: ".3em" }}>
              <Link
                to={item.link}
                style={{
                  color: `${attach?theme.primaryDark:theme.primaryLight}`,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                activeStyle={{ color: theme.dark.orange }}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <Modal>
        <h1>Book Your Next Event</h1>
        <p>With Davis Family Catering</p>
      </Modal>
    </animated.nav>
  )
}

export default Navigation
