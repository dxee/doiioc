module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-doiioc',
      options: {
        notesPath: '/txt'
      }
    },
    {
      resolve: 'gatsby-theme-doiioc-doc',
      options: {
        projectsPath: '/work',
        projects: 'projects'
      }
    },
    {
      resolve: 'gatsby-theme-doiioc-blog',
      options: {
        postsPath: '/writing'
      }
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
