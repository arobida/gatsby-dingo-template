import React from "react"
import { Link } from "gatsby"
import StyledBgImage from "../components/bgImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../components/styles/theme"
import Image from "../components/image"

const About = props => {
  return (
    <Layout location={props.location}>
      <SEO title="About" />
      <StyledBgImage>
        <div style={{ display: "flex", height: "200px" }}>
          <h1
            style={{
              color: theme.primaryLight,
              width: "350px",
              height: "75px",
              fontSize: "3em",
              margin: "auto",
              fontWeight: "800",
            }}
          >
            About Us
          </h1>
        </div>
      </StyledBgImage>
      <p>Learn more about what we do</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default About
