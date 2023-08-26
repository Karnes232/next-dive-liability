import LiabilitySelectButton from "@/components/hotelSelectButton/LiabilitySelectButton"
import Layout from "@/components/layout"
import React from "react"
import { useTranslation } from "react-i18next"
const Index = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <main className="min-h-screen mt-10 flex flex-col justify-start items-center mx-5 lg:w-3/4 max-w-4xl lg:mx-auto">
        <LiabilitySelectButton
          name={t("LiabilitySelectButton1")}
          link="/barcelo/dsd"
        />
        <LiabilitySelectButton
          name={t("LiabilitySelectButton2")}
          link="/barcelo/certified"
        />
        <LiabilitySelectButton
          name={t("LiabilitySelectButton3")}
          link="/barcelo/liability"
        />
      </main>
    </Layout>
  )
}

export default Index
