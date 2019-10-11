/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTransition, animated, config } from "react-spring"
// Global Styles & Theme
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styled/global"
import { theme } from "./styled/theme"
// Hooks
import useMedia from "../hooks/useMedia"
// Components
import Navigation from "./navigation"
import Footer from "./footer"
import MobileMenu from "./mobileMenu"

const Layout = ({ children, location }) => {
  const mobile = useMedia(theme.smQuery)
  const transitions = useTransition(location, location => location.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  })
  return (
    <ThemeProvider theme={theme}>
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <GlobalStyles />
          <Navigation mobile={mobile}/>
          {transitions.map(({ item, key, props }) => {
            return (
              item && (
                <animated.main
                  key={key}
                  style={{
                    textAlign: "center",
                    minHeight: "100vh",
                    flex: "1",
                    ...props,
                  }}
                >
                  {children}
                </animated.main>
              )
            )
          })}
          <Footer mobile={mobile} />
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
