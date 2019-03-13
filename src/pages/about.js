import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div style={{ color: `teal` }}>
    <Header />
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Such wow. Very React.</p>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`