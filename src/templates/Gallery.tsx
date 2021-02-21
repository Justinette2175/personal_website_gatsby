import React from "react"
import Layout from "../components/Layout"
import { Card } from "../components/Card"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"

export default function Project({ data }) {
  const gallery = data.markdownRemark
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h2>{gallery.frontmatter.title}</h2>
      <Markdown className="max-w-screen-sm">
        {gallery.rawMarkdownBody || ""}
      </Markdown>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map(({ node }) => {
          const tags = node.frontmatter.tags || []
          return (
            <Card
              title={node.frontmatter.title}
              url={node.frontmatter.customSlug}
              text={node.excerpt}
              tags={tags.map(t => ({ label: t }))}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $projects: [String]) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        title
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
