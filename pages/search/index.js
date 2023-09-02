import LiabilitySelectButton from "@/components/hotelSelectButton/LiabilitySelectButton"
import Layout from "@/components/layout"
import React from "react"
import { useTranslation } from "react-i18next"
const Index = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <main className="min-h-screen my-10 flex flex-col justify-start items-center mx-5 lg:w-3/4 max-w-4xl lg:mx-auto">
        <LiabilitySelectButton
          name="Barcelo DSD Liabilities"
          link="/barcelo/dsd/search"
        />
        <LiabilitySelectButton
          name="Barcelo Certified Liabilities"
          link="/barcelo/certified/search"
        />
        <LiabilitySelectButton
          name="Barcelo General Liabilities"
          link="/barcelo/liability/search"
        />
        <LiabilitySelectButton
          name="Majestic DSD Liabilities"
          link="/majestic/dsd/search"
        />
        <LiabilitySelectButton
          name="Majestic Certified Liabilities"
          link="/majestic/certified/search"
        />
        <LiabilitySelectButton
          name="Majestic General Liabilities"
          link="/majestic/liability/search"
        />
        <LiabilitySelectButton
          name="Lopesan General Liabilities"
          link="/lopesan/search"
        />
        <LiabilitySelectButton
          name="Occidental Caribe General Liabilities"
          link="/oc/search"
        />
        <LiabilitySelectButton
          name="Occidental Punta Cana General Liabilities"
          link="/op/search"
        />
      </main>
    </Layout>
  )
}

export default Index