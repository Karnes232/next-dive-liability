import React from "react"
import PDFFile from "../components/pdfComponent/PDFFile"
import { PDFDownloadLink } from "@react-pdf/renderer"

const pdf = () => {
  return (
    <div className="">
    <PDFDownloadLink document={<PDFFile name='James'/>} filename="FORM">
    {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
    </PDFDownloadLink>
    {/* <PDFFile /> */}
  </div>
  )
}

export default pdf
