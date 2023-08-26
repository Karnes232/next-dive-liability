import LiabilityReleaseForm from "@/components/formComponents/LiabilityReleaseForm"
import Layout from "@/components/layout"
import React from "react"

const index = () => {
  return (
    <Layout>
      <main className="min-h-screen">
        <LiabilityReleaseForm
          hotel="Majestic"
          liabilityLocation="Majestic General Liability"
        />
      </main>
    </Layout>
  )
}

export default index
