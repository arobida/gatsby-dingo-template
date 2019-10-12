import React from "react"
import { Link } from "gatsby"
import { object, bool } from "prop-types"
import { theme } from "./styled/theme"

const links = ({ data, mobile }) => {
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexDirection: `${mobile ? "column" : "row"}`,
          alignContent: `baseline`,
          alignItems: `center`,
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
                  color: theme.primaryDark,
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
    </>
  )
}

links.propTypes = {
  data: object.isRequired,
  mobile: bool,
}

export default links
