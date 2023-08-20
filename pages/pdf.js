"use client"

import React, { useEffect, useState } from "react"
import PDFFile from "../components/pdfComponent/PDFFile"
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer"

const test = <PDFFile name="james" />

const Pdf = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className="">
      {isClient && (
        <>
          <PDFDownloadLink document={<PDFFile name="James" />} filename="FORM">
            {({ loading }) =>
              loading ? (
                <button>Loading Document...</button>
              ) : (
                <button>Download</button>
              )
            }
          </PDFDownloadLink>
          <BlobProvider document={<PDFFile name="James" />}>
            {({ error, url }) => {
              console.log(url)
              return (
                url && (
                  <a href={url} rel="noreferrer" target="_blank">
                    Open the document
                  </a>
                )
              )
            }}
          </BlobProvider>
        </>
      )}
    </div>
  )
}

export default Pdf
