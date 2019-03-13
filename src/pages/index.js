import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default ({data}) => {
  console.log(data)
  return (
    <div style={{ color: `purple`, margin: `3rem auto`, maxWidth: 600 }}>
      <Header />
      <p>What a world.</p>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
            <span style={{color: `#bbb`}}>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div >
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
