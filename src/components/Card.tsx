import { Link } from "gatsby"
import React from "react"

import { Tag, TagInfo } from "./Tag"

type CardProps = {
  title: string
  url: string
  text: string
  tags?: TagInfo[]
}

export const Card: React.FC<CardProps> = ({ title, url, text, tags = [] }) => {
  return (
    <Link to={url}>
      <div className="p-4 border border-primary-dark rounded-2xl grid gap-2 can-hover:hover:bg-white duration-300 transition-colors">
        <h3>{title}</h3>
        <p>{text}</p>
        {tags.length > 1 && (
          <div className="flex flex-wrap">
            {tags.map(({ label, link }) => (
              <div key={label} className="mb-1 mr-1">
                <Tag label={label} link={link} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
