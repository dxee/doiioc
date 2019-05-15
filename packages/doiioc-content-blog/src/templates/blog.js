import { graphql } from 'gatsby'

import Blog from '../components/Blog'

export default Blog

export const pageQuery = graphql`
  query($id: String!) {
    blog: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
