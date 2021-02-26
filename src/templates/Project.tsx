import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"
import { Container } from "../components/Container"

export default function Project({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <h2>{post.frontmatter.title}</h2>
      </Container>
      <div className="bg-white w-full p-16 text-opacity-80 text-lg">
        <div className="max-w-screen-md w-full m-auto grid gap-8">
          <Markdown>{post.rawMarkdownBody}</Markdown>
        </div>
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
