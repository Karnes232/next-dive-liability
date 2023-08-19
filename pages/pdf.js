"use client"
import React, { useEffect, useState } from "react"
import PDFFile from "../components/pdfComponent/PDFFile"
import { PDFDownloadLink } from "@react-pdf/renderer"

const pdf = () => {
  const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
      }, [])
  return (
    <div className="">{isClient && (
    <PDFDownloadLink document={<PDFFile name='James'/>} filename="FORM">
    {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
    </PDFDownloadLink>
    {/* <PDFFile /> */})}

  </div>
  )
}

export default pdf
