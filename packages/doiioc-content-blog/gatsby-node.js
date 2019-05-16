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
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            parent {
              ... on File {
                name
                base
                relativeDirectory
                sourceInstanceName
              }
            }
            id
            frontmatter {
              id
              title
            }
            fields {
              slug
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

  // create blog pages
  result.data.allMdx.edges
    .filter(({ node }) => node.parent.sourceInstanceName === 'blogs')
    .forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        context: node,
        component: blogTempate
      })
    })

  createPage({
    path: `${pluginOptions.blogsPath}`,
    component: blogsTemplate
  })
}

exports.onCreateNode = ({ node, getNode, actions }, pluginOptions) => {
  if ('Mdx' !== node.internal.type) {
    return
  }

  // use id as the last path
  const { createNodeField } = actions
  let slug = createFilePath({ node, getNode, trailingSlash: false })
  slug = slug.substring(0, slug.lastIndexOf('/') + 1) + node.frontmatter.id

  // create slug field
  createNodeField({
    node,
    name: 'slug',
    value: `${pluginOptions.blogsPath}${slug}`
  })
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
