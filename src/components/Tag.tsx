import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"

import { TAGS } from "../content/tags"

type TagProps = {
  name: string
  size?: "sm" | "md"
}

export const Tag: React.FC<TagProps> = ({ name, size = "md" }) => {
  const tagInfo = TAGS[name]

  if (!tagInfo) {
    console.log("no tag info", name)
    return null
  }

  if (tagInfo.link) {
    return (
      <Link to={tagInfo.link}>
        <Tag name={name} />
      </Link>
    )
  }
  return (
    <div
      style={{ backgroundColor: tagInfo.color || "" }}
      className={clsx(
        "text-primary-very-dark rounded-sm",
        size === "sm" && "py-1 px-2 text-xs",
        size === "md" && "py-1 px-2 text-base"
      )}
    >
      {tagInfo.label}
    </div>
  )
}
