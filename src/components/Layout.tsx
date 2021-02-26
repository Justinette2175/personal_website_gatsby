/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./Header"
import { Container } from "./Container"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="font-body bg-primary-main min-h-screen text-primary-dark flex justify-center">
      <div className="w-full">
        <div className="min-h-page-content">
          <Header
            siteTitle={data.site.siteMetadata?.title || `Justine Gagnepain`}
          />

          <main className="grid gap-8">{children}</main>
        </div>

        <footer className="py-8">
          <Container>©Justine Gagnepain {new Date().getFullYear()}</Container>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
