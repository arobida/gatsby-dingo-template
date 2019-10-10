import React, { useState } from "react"
import { Link } from "gatsby"
import useInput from "../hooks/useInput"
import useMedia from "../hooks/useMedia"
import StyledBgImage from "../components/bgImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../components/styles/theme"
import Form from "../components/form"
import Sent from "../components/sent"
// for netlify forms
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const Contact = props => {
  const [toggle, setToggle] = useState(false)
  const mobile = useMedia(theme.smQuery)
  const name = useInput("")
  const email = useInput("")
  const message = useInput("")
  const onSubmit = e => {
    setToggle(!toggle)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then(() =>
        console.log(
          "Success!",
          `You have sent this encoded url: ${encode({
            "form-name": "contact",
            name: name.value,
            email: email.value,
            message: message.value,
          })}`
        )
      )
      .catch(error => console.log(error))
    e.preventDefault()
  }
  const reset = () => {
    setToggle(false)
    name.clear()
    email.clear()
    message.clear()
  }
  return (
    <Layout location={props.location}>
      <SEO title="Contact" />
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
              WebkitTextStroke: `3px ${theme.dark.orange}`,
            }}
          >
            Contact Us
          </h1>
        </div>
      </StyledBgImage>
      {!toggle ? (
        <Form onSubmit={onSubmit} name={name} email={email} message={message} />
      ) : (
        <Sent name={name} email={email} reset={reset} />
      )}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Contact
