import React from "react"

export const Container: React.FC = ({ children }) => {
  return (
    <div className="w-full max-w-screen-xl m-auto grid gap-8 px-8">
      {children}
    </div>
  )
}
