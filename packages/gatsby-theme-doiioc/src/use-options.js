import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    {
      garden(id: { eq: "gatsby-theme-doiioc-root" }) {
        notesPath
        postsPath
      }
    }
  `)

  return data.garden
}
