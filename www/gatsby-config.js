module.exports = {
  siteMetadata: {
    title: 'doiioc',
    email: 'bing.fxx@gmail.com'
  },
  plugins: ['gatsby-plugin-doiioc'],
  __experimentalThemes: [
    {
      resolve: 'doiioc-theme'
    },
    {
      resolve: 'doiioc-content-blog',
      options: {
        blogsPath: 'content/blogs'
      }
    }
  ]
}
