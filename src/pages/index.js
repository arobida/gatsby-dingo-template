import React from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import useMedia from "../hooks/useMedia"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
  console.log(props)
  const mobile = useMedia("(max-width:500px)")
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
     <h1>Davis Family Catering</h1>
      <p>Delivering taste from our family to yours!</p>
    </Layout>
  )
}

export default IndexPage
