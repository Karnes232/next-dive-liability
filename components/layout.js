import React from "react"
import Header from "./headerComponent/Header"
import LanguageSelector from "./LanguageSelector/LanguageSelector"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div>
        <LanguageSelector />
      </div>
      {children}
    </div>
  )
}

export default Layout
