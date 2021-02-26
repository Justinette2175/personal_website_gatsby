import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "../components/Container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div className="max-w-screen-md grid gap-8">
        <h2>Hi there</h2>
        <p>
          I am a full-stack web developer with a track record building web
          applications for the education, IT, cryptocurrency, and pharmaceutical
          industries.
        </p>
        <p>
          At the moment, I am most often working with Node.js, Typescript,
          React, Redux, GraphQL, Gastby, Next.js, Jest and Cypress. A quick
          thinker and avid learner, I onboard efficiently - and proactively
          learn any necessary technologies - to be swiftly operational on client
          projects.
        </p>
        <p>
          In the past, I have worked in communications, graphic and UX design,
          product ownership, and project management. From having explored the
          spectrum of work that goes into creating user-centric products, I
          empathize with clients and adapt development to their business needs.{" "}
        </p>
        <p>
          Write me at jugagnepain75@gmail.com, or contact me on{" "}
          <a href="https://www.linkedin.com/in/justinegagnepain/">LinkedIn</a>
        </p>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
