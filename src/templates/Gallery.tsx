import React from "react"
import Layout from "../components/Layout"
import { Card } from "../components/Card"
import { graphql } from "gatsby"

export default function Project({ data }) {
  const gallery = data.markdownRemark
  const projects = data.allMarkdownRemark.edges
  console.log("data", projects)
  return (
    <Layout>
      <h2>{gallery.frontmatter.title}</h2>
      <p
        className="max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: gallery.frontmatter.description }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map(({ node }) => (
          <Card
            title={node.frontmatter.title}
            url={node.frontmatter.customSlug}
            text={node.excerpt}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $projects: [String]) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        projects
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { customSlug: { in: $projects } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            customSlug
          }
          excerpt
        }
      }
    }
  }
`
