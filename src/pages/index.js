import React from "react"
import { useSpring, animated, config } from "react-spring"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CornerImg from "../components/cornerImg"
import Image from "../components/image"
import Card from "../components/card"
import { food } from "../data/food"
import { theme } from "../components/styled/theme"
import Section from "../components/section"

const IndexPage = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Section>
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
        <h2 style={{ color: theme.light.orange }}>
          <em>Delicious Home Cooked Meals</em>
        </h2>
        <h1
          style={{
            background: "-webkit-linear-gradient(#000,#D55913)",
            fontSize: "2.3em",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Davis Family Catering
        </h1>
        <p>Delivering taste from our family to yours!</p>
      </Section>
      <Section>
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
      </Section>
    </Layout>
  )
}

export default IndexPage
