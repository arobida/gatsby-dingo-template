import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import logo from "../images/gatsby-icon.png"
import { theme } from "./styles/theme"

const Footer = props => {
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
          height: `${props.mobile ? "40em" : "15em"}`,
          color: theme.primaryDark,
          display: "flex",
          flexDirection: `${props.mobile ? "column" : "row"}`,
          justifyContent: "space-around",
          alignItems: `${props.mobile ? "center" : "flex-start"}`,
        }}
      >
        <ul style={{ listStyle: "none", width: "40%" }}>
          <h3>About Us</h3>
          <li>
            Heaven fruitful doesn't over for these theheaven fruitful doe over
            days appear creeping seasons sad behold beari ath of it fly signs
            bearing be one blessed after.
          </li>
        </ul>
        <ul style={{ listStyle: "none", width: "25%" }}>
          <h3>Links</h3>
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
        <ul style={{ listStyle: "none", width: "25%" }}>
          <h3>Contact Us</h3>
          <li>Location:</li>
          <li>Phone:</li>
          <li>Email:</li>
        </ul>
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
