import React from "react"
import logo from "../../images/Logo-Mariana-Caribbean-Sports2.webp"
import Image from "next/image"

const Header = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <Image src={logo} alt="Mariana Caribbean Sports" height={100} />
    </div>
  )
}

export default Header
