module.exports = {
  __experimentalThemes: [
    {
      resolve: 'doiioc-theme-default'
    },
    {
      resolve: 'doiioc-content-blog',
      options: {
        blogsPath: 'content/blogs'
      }
    },
    {
      resolve: 'doiioc-content-common'
    }
  ],
  siteMetadata: {
    title: 'Digital Garden',
    email: 'johnotander@gmail.com',
    social: {
      twitter: '4lpine',
      github: 'johno'
    }
  }
}
