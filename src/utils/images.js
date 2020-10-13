
/*
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, 200px)`
};

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <div style={imgGridStyle}>
      {data.allImageSharp.edges.map(edge => 
        <Img fluid={edge.node.fluid} />
      )}
    </div>
  </div>
)

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
*/