import { Link } from "gatsby"
import React from "react"

type HeaderProps = {
  siteTitle: string
}

export const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className="p-8">
    <h1>Justine Gagnepain</h1>
  </header>
)
