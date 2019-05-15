import React from 'react'
import { graphql } from 'gatsby'

import Blogs from '../components/Blogs'

export default ({
  data: {
    allMdx: { edges }
  }
}) => {
  const blogs = edges
    .filter(({ node }) => node.parent.sourceInstanceName === 'blogs')
    .map(edge => edge.node)

  return <Blogs blogs={blogs} />
}

export const pageQuery = graphql`
  query BlogList {
    allMdx {
      edges {
        node {
          id
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
