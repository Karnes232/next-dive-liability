import Image from "next/image"
import { Inter } from "next/font/google"
import Layout from "@/components/layout"
import FormComponent from "@/components/formComponents/FormComponent"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen">
        <FormComponent/>
      </main>
    </Layout>
  )
}
