const { createFilePath } = require('gatsby-source-filesystem')

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
