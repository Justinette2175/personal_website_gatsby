const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const COLLECTIONS = {
  GALLERIES: "galleries",
  PROJECTS: "projects"
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              customSlug
              projects
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const collection = node.fields.slug.split("/")[2]
    if (collection === COLLECTIONS.PROJECTS) {
      createPage({
        path: node.frontmatter.customSlug || node.fields.slug,
        component: path.resolve(`./src/templates/Project.tsx`),
        context: {
          id: node.id,
        },
      })
      return 
    }

    if (collection === COLLECTIONS.GALLERIES) {
      console.log("SLUGS FOR GALLERY ARE", node.frontmatter.projects)
      createPage({
        path: node.frontmatter.customSlug || node.fields.slug,
        component: path.resolve(`./src/templates/Gallery.tsx`),
        context: {
          id: node.id,
          projects: node.frontmatter.projects
        },
      })
    }
  })
}
