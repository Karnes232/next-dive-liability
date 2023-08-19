import React from "react"
import Header from "./headerComponent/Header"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden">
      <Header />
      {children}
    </div>
  )
}

export default Layout
