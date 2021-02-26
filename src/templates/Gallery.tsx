import React from "react"
import Layout from "../components/Layout"
import { Card } from "../components/Card"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"
import { Container } from "../components/Container"

export default function Project({ data }) {
  const gallery = data.markdownRemark
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Container>
        <h2>{gallery.frontmatter.title}</h2>
        <Markdown className="max-w-screen-sm">
          {gallery.rawMarkdownBody || ""}
        </Markdown>
      </Container>
      <div className="grid">
        {projects.map(({ node }, i) => {
          console.log(
            i % 4 === 0 ? "4" : i % 3 === 0 ? "3" : i % 2 === 0 ? "2" : "1"
          )
          const tags = node.frontmatter.tags || []
          const image = node.frontmatter.cover
            ? node.frontmatter.cover.childImageSharp.fluid
            : ""
          return (
            <Card
              layout={
                i % 4 === 0 ? "4" : i % 2 === 0 ? "2" : i % 3 === 0 ? "3" : "1"
              }
              title={node.frontmatter.title}
              url={node.frontmatter.customSlug}
              text={node.excerpt}
              tags={tags}
              image={image}
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
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            customSlug
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 800, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
