const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const Debug = require(`debug`)
const { createFilePath } = require('gatsby-source-filesystem')

const debug = Debug(`doiioc-content-blog`)

const blogTempate = require.resolve('./src/templates/blog')
const blogsTemplate = require.resolve('./src/templates/blogs')

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions
  // Relative directory
  const { blogsPath = 'blogs' } = pluginOptions

  const getBlogPath = node => {
    return path.join(
      blogsPath,
      node.parent.relativeDirectory,
      node.frontmatter.id
    )
  }

  const result = await graphql(`
    {
      mdxPages: allMdx {
        edges {
          node {
            id
            frontmatter {
              id
              title
            }
            parent {
              ... on File {
                name
                base
                relativeDirectory
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error(`Could not query posts`, result.errors)
  }

  const { mdxPages } = result.data
  const posts = mdxPages.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === 'blogs'
  )

  // Create posts pages
  posts.forEach(({ node }) => {
    createPage({
      path: getBlogPath(node),
      context: node,
      component: blogTempate
    })
  })

  createPage({
    path: blogsPath,
    component: blogsTemplate
  })
}

exports.onCreateNode = ({ node, getNode, actions }, pluginOptions) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    let slug = createFilePath({ node, getNode, trailingSlash: false })

    // use id as the last path
    const lastIndex = slug.lastIndexOf('/')
    slug = slug.substring(0, lastIndex + 1) + node.frontmatter.id
    createNodeField({
      node,
      name: `slug`,
      value: `${pluginOptions.blogsPath}${slug}`
    })
  }
}

exports.onPreBootstrap = ({ store }, pluginOptions) => {
  const { program } = store.getState()

  const dirs = [
    path.join(program.directory, pluginOptions.blogsPath || `blogs`)
  ]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      debug(`Initializing ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve(`doiioc-content-blog`)),
          use: [loaders.js()]
        }
      ]
    }
  })
}
