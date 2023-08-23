import React from "react"
import Header from "./headerComponent/Header"
const { detect } = require('detect-browser');
const Layout = ({ children }) => {
  const browser = detect();
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div className="flex flex-col justify-center items-center">
      {browser.name}<br/>
      {browser.version}<br/>
      {browser.os}
      </div>
      
      {children}
    </div>
  )
}

export default Layout
