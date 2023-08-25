import Image from "next/image"
import { Inter } from "next/font/google"
import Layout from "@/components/layout"
import DsdFormComponent from "@/components/formComponents/DsdFormComponent"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen">
        <DsdFormComponent
          hotel="Majestic"
          liabilityLocation="Majestic Discover"
        />
      </main>
    </Layout>
  )
}
