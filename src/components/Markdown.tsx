import React, { FC } from "react"
import ReactMarkdown from "react-markdown"

export const Markdown: FC<{ children: string; className?: string }> = props => (
  <ReactMarkdown
    className={props.className}
    transformImageUri={(url: string) => `/img/${url}`}
    allowDangerousHtml
  >
    {props.children}
  </ReactMarkdown>
)
