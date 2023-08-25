import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HotelSelectButton = ({hotel, image, link}) => {
  return (
    <Link href={link} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow min-w-full hover:bg-gray-100 my-5">
   
    <Image
        src={image}
        width={500}
        height={500}
        className="object-cover w-full rounded-t-lg h-48 lg:h-56"
        alt="Picture of the author"
      />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{hotel}</h5>
       
    </div>
</Link>
  )
}

export default HotelSelectButton