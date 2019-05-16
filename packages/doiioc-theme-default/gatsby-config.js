const path = require('path')

module.exports = options => {
  const { mdxLayouts = {} } = options

  return {
    __experimentalThemes: [],
    plugins: [
      'gatsby-mdx',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        }
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: ['gatsby-remark-prismjs']
        }
      }
    ]
  }
}
