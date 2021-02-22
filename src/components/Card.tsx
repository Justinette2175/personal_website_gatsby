import { Link } from "gatsby"
import React from "react"
import Img, { FluidObject } from "gatsby-image"

import { Tag } from "./Tag"
import clsx from "clsx"

type CardProps = {
  title: string
  url: string
  text: string
  tags?: string[]
  image?: FluidObject
  layout: "1" | "2" | "3" | "4"
}

export const Card: React.FC<CardProps> = ({
  title,
  url,
  text,
  tags = [],
  image,
  layout,
}) => {
  console.log("tags", tags)
  return (
    <Link to={url}>
      <div
        className={clsx(
          "relative w-full",
          layout === "1" && "bg-primary-light",
          layout === "2" && "bg-primary-very-dark",
          layout === "3" && "bg-primary-dark",
          layout === "4" && "bg-primary-very-dark"
        )}
      >
        <div className="max-w-screen-xl w-full grid lg:grid-cols-7 min-h-card-photo m-auto">
          <div
            className={clsx(
              "col-span-4 p-8",
              (layout === "2" || layout === "4") && "lg:order-2"
            )}
          >
            {image ? (
              <div className="p-8 bg-white h-full">
                <Img className="h-full" fluid={image} />
              </div>
            ) : (
              <div />
            )}
          </div>

          <div
            className={clsx(
              "px-8 py-16 lg:flex lg:items-center lg:justify-center col-span-3",
              (layout === "1" || layout === "3") && "lg:order-2",
              (layout === "2" || layout === "4") && " lg:order-1",
              layout === "2" && "text-primary-light",
              layout === "3" && "text-white",
              layout === "4" && "text-primary-light"
            )}
          >
            <div className="lg:max-w-lg grid gap-8">
              <h3 className="text-6xl">{title}</h3>
              <p className="text-lg">{text}</p>
              {tags.length > 0 && (
                <div className="flex flex-wrap">
                  {tags.map(t => (
                    <div key={t} className="mb-1 mr-2">
                      <Tag name={t} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
