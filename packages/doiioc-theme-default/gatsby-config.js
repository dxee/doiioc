const path = require('path')

module.exports = options => {
  const { mdxLayouts = {} } = options

  return {
    plugins: [
      'gatsby-mdx',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: ['gatsby-remark-prismjs']
        }
      }
    ]
  }
}
