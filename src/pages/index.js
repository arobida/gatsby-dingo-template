import React from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import useMedia from "../hooks/useMedia"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CornerImg from "../components/cornerImg"
import Image from "../components/image"
import Card from "../components/card"
import { food } from "../data/food"

const IndexPage = props => {
  const mobile = useMedia("(max-width:500px)")
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <div
        style={{
          position: "absolute",
          zIndex: "-40",
          top: "0",
          right: "0",
          background:
            "radial-gradient(circle at top right, rgb(255, 255, 255,0.3) 30%,#FAF9FC 65%)",
          width: "21em",
          height: "21em",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "-50",
        }}
      >
        <CornerImg style={{ width: "20em", height: "20em" }} />
      </div>
      <h1
        style={{
          background: "-webkit-linear-gradient(#000,#D55913)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Davis Family Catering
      </h1>
      <p>Delivering taste from our family to yours!</p>
      <Card>
        {food.menu.map(item => {
          return (
            <div key={item.title} className="cards">
              <Image
                filename={item.image}
                style={{ width: "100%", borderRadius: ".7em .7em 0 0" }}
              />
              <h3>{item.title}</h3>
              <p style={{ textAlign: "left", margin: ".5em" }}>
                {item.description}
              </p>
            </div>
          )
        })}
      </Card>
    </Layout>
  )
}

export default IndexPage
