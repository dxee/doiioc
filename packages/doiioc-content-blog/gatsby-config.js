module.exports = config => {
  const plugins = []

  return {
    __experimentalThemes: [],
    plugins: [
      ...plugins,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: config.blogsPath || `blogs`,
          name: `blogs`
        }
      }
    ]
  }
}
