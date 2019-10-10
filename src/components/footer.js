import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import logo from "../images/gatsby-icon.png"
import { theme } from "./styles/theme"

const Footer = () => {
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

  return (
    <footer style={{ background: "rgb(215, 204, 200,.6)" }}>
      <div
        style={{
          width: "100%",
          height: "15em",
          color: theme.primaryDark,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <div style={{ width: "15em" }}>
          <h3>About Us</h3>
          <p>
            Heaven fruitful doesn't over for these theheaven fruitful doe over
            days appear creeping seasons sad behold beari ath of it fly signs
            bearing be one blessed after.
          </p>
        </div>
        <div style={{ width: "15em" }}>
          <h3>Links</h3>
          <ul style={{ listStyle: "none" }}>
            {data.site.siteMetadata.navLinks.map(item => {
              return (
                <li key={item.name} style={{ paddingTop: ".3em" }}>
                  <Link
                    to={item.link}
                    style={{
                      color: theme.primaryDark,
                      textTransform: "capitalize",
                    }}
                    activeStyle={{ color: theme.dark.orange }}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div style={{ width: "15em" }}>
          <h3>Contact Us</h3>
          <ul style={{ listStyle: "none" }}>
            <li>Location:</li>
            <li>Phone:</li>
            <li>Email:</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "1.3em",
            transform: "translateY(.2em)",
            marginRight: ".3em",
          }}
        />
        {data.site.siteMetadata.title} ©{new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
