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
      <div className="max-w-screen-lg w-full">
        <div className="min-h-page-content">
          <Header
            siteTitle={data.site.siteMetadata?.title || `Justine Gagnepain`}
          />

          <main className="px-8 grid gap-8">{children}</main>
        </div>
        <footer className="px-8">© {new Date().getFullYear()}</footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
