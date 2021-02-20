import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import clsx from "clsx"

export type TagInfo = {
  label: string
  link?: string
}

export const Tag: React.FC<TagInfo> = ({ label, link }) => {
  if (link) {
    return (
      <Link to={link}>
        <Tag label={label} />
      </Link>
    )
  }
  return (
    <div
      className={clsx(
        "bg-primary-dark text-white rounded-full py-1 px-2 text-xs"
      )}
    >
      {label}
    </div>
  )
}
