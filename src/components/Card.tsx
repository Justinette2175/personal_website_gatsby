import { Link } from "gatsby"
import React from "react"

type CardProps = {
  title: string
  url: string
  text: string
}

export const Card: React.FC<CardProps> = ({ title, url, text }) => {
  return (
    <Link className="rotate-0 hover:rotate-2 transform duration-1000" to={url}>
      <div className="p-4 border border-primary-dark rounded-2xl grid gap-2">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  )
}
