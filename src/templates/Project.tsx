import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"

export default function Project({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="max-w-screen-md grid m-auto gap-8">
        <h2>{post.frontmatter.title}</h2>
        <Markdown>{post.rawMarkdownBody}</Markdown>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
  }
`
