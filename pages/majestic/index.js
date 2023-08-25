import LiabilitySelectButton from "@/components/hotelSelectButton/LiabilitySelectButton"
import Layout from "@/components/layout"
import React from "react"

const index = () => {
  return (
    <Layout>
      <main className="min-h-screen flex flex-col justify-center items-center mx-5 lg:w-3/4 max-w-4xl lg:mx-auto">
        <LiabilitySelectButton
          name="Discover Scuba Diving"
          link="/majestic/dsd"
        />
        <LiabilitySelectButton
          name="Certifed Diver"
          link="/majestic/certified"
        />
        <LiabilitySelectButton
          name="Liability Release"
          link="/majestic/liability"
        />
      </main>
    </Layout>
  )
}

export default index
