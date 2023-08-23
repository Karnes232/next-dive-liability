import React from "react"
import Header from "./headerComponent/Header"
import browser from 'browser-detect';
const Layout = ({ children }) => {
  const result = browser();
  console.log(result)
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden">
      <Header />
      {result.name}
      {children}
    </div>
  )
}

export default Layout
