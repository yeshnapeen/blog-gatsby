const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField} = actions

    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath,'.md');

        createNodeField({
            node,
            name:'slug',
            value: slug
        })
    }
     

}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query{
            allMarkdownRemark{
            edges{
                node{
                    fields{
                        slug
              }
            }
          }
        }
      }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/Blog/${edge.node.fields.slug}`,
            context : {
                slug: edge.node.fields.slug
        
            }
        })
    })
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    if (stage === 'build-javascript') {
      const config = getConfig()
      const miniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
      )
      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true
      }
      actions.replaceWebpackConfig(config)
    }
  }