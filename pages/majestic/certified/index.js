import FdFormComponent from "@/components/formComponents/FdFormComponent"
import Layout from "@/components/layout"
import React from "react"

const index = () => {
  return (
    <Layout>
      <main className="min-h-screen">
        <FdFormComponent
          hotel="Majestic"
          liabilityLocation="Majestic Certified Diver"
        />
      </main>
    </Layout>
  )
}

export default index
