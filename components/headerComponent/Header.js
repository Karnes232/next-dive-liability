import React from "react"
import logo from "../../images/Logo-Mariana-Caribbean-Sports2.webp"
import Image from "next/image"
import logo2 from '../../images/logo.png'
const Header = () => {
  return (
    <div className="flex justify-center items-center my-5 ">
      <Image
        src={logo2}
        alt="Mariana Caribbean Sports"
        height="100%"
        className="object-contain h-24 md:h-28 lg:h-36"
        priority
      />
    </div>
  )
}

export default Header
