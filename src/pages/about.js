import React from "react"
import { Link } from "gatsby"
import StyledBgImage from "../components/bgImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../components/styled/theme"
import Image from "../components/image"
import Section from "../components/section"

const About = props => {
  return (
    <Layout location={props.location}>
      <SEO title="About" />

      <StyledBgImage>
        <div style={{ display: "flex", height: "200px", textAlign: "center" }}>
          <h1
            style={{
              color: theme.primaryLight,
              width: "350px",
              height: "75px",
              fontSize: "3em",
              margin: "auto",
              fontWeight: "800",
              WebkitTextStroke: `3px ${theme.dark.orange}`,
            }}
          >
            About Us
          </h1>
        </div>
      </StyledBgImage>
      <Section>
        <p>Learn more about what we do</p>
      </Section>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default About
