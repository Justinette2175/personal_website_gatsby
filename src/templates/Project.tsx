import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"

export default function Project({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <h2>{post.frontmatter.title}</h2>
      <Markdown>{post.rawMarkdownBody}</Markdown>
    </Layout>
  )
}
export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        title
        tags
      }
    }
  }
`
