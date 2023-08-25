import LiabilitySelectButton from "@/components/hotelSelectButton/LiabilitySelectButton"
import Layout from "@/components/layout"
import React from "react"

const index = () => {
  return (
    <Layout>
      <main className="min-h-screen mt-10 flex flex-col justify-start items-center mx-5 lg:w-3/4 max-w-4xl lg:mx-auto">
        <LiabilitySelectButton
          name="Discover Scuba Diving"
          link="/barcelo/dsd"
        />
        <LiabilitySelectButton
          name="Certifed Diver"
          link="/barcelo/certified"
        />
        <LiabilitySelectButton
          name="Liability Release"
          link="/barcelo/liability"
        />
      </main>
    </Layout>
  )
}

export default index
