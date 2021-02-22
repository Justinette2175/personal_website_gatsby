import { Link } from "gatsby"
import React from "react"
import { Container } from "./Container"

export const Header: React.FC = () => (
  <header className="p-8">
    <Container>
      <Link to="/">
        <h1>Justine Gagnepain</h1>
      </Link>
    </Container>
  </header>
)
