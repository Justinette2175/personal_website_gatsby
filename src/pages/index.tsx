import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "../components/Container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h2>Hi there</h2>
      <p>
        I am a full-stack web developer with a track record building web
        applications for the education, IT, cryptocurrency, and pharmaceutical
        industries.
      </p>
      <p>
        At the moment, I am most often working with Node.js, Typescript, React,
        Redux, GraphQL, Gastby, Next.js, Jest and Cypress. A quick thinker and
        avid learner, I onboard efficiently - and proactively learn any
        necessary technologies - to be swiftly operational on client projects.
      </p>
      <ul>
        <li>I have:</li>
        <li>Methodically refactored large applications for consistency</li>
        <li>
          Rapidly built prototypes and small scale applications as a one-person
          team
        </li>
        <li>
          Lent an extra hand to overstretched development teams in crunch period
        </li>
        <li>Built reusable component libraries to accelerate future</li>
        development
        <li>
          Generated concise functional requirements and technical specifications
          for fast-growing apps that lack clear documentation.
        </li>
      </ul>
      <p>
        In the past, I have worked in communications, graphic and UX design,
        product ownership, and project management. From having explored the
        spectrum of work that goes into creating user-centric products, I
        empathize with clients and adapt development to their business needs.{" "}
      </p>
    </Container>
  </Layout>
)

export default IndexPage
