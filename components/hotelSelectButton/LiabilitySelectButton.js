import Link from "next/link"
import React from "react"

const LiabilitySelectButton = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center bg-[#04A5F1] border border-gray-200 rounded-lg shadow min-w-full active:bg-[#4596bc]  hover:bg-[#4596bc] my-5"
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold text-white tracking-wide">
          {name}
        </h5>
      </div>
    </Link>
  )
}

export default LiabilitySelectButton
