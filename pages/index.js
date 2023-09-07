import Image from "next/image"
import { Inter } from "next/font/google"
import Layout from "@/components/layout"
import FormComponent from "@/components/formComponents/DsdFormComponent"
import HotelSelectButton from "@/components/hotelSelectButton/HotelSelectButton"

import barcelo from "../images/barcelo.webp"
import majestic from "../images/majestic.jpg"
import lopesan from "../images/lopesan.jpg"
import oc from "../images/Occidental-Caribe-Punta-Cana--Resort-1.jpg"
import op from "../images/occident-PuntaCana.jpg"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  useEffect(() => {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
          registration.unregister();
      } 
  });
  }, [])
  
  return (
    <Layout>
      <main className="min-h-screen flex flex-col justify-center items-center mx-5 lg:w-3/4 max-w-4xl lg:mx-auto">
        <HotelSelectButton
          hotel="Barcelo Palace Deluxe"
          image={barcelo}
          link="/barcelo"
        />
        <HotelSelectButton
          hotel="Majestic Elegance"
          image={majestic}
          link="/majestic"
        />
        <HotelSelectButton
          hotel="Lopesan Costa Bavaro"
          image={lopesan}
          link="/lopesan"
        />
        <HotelSelectButton hotel="Occidental Caribe" image={oc} link="/oc" />
        <HotelSelectButton
          hotel="Occidental Punta Cana"
          image={op}
          link="/op"
        />
      </main>
    </Layout>
  )
}
