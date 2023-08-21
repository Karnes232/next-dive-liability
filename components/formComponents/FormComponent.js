"use client"

import React, { useEffect, useRef, useState } from "react"
import * as FileSaver from "file-saver"
import MedicalForm from "./medical/MedicalForm"
import InformationForm from "./information/InformationForm"
import {
  informationStateObject,
  medicalStateObject,
} from "../../data/stateObjects"
import DiscoverNonDiscloure from "./liability/DiscoverNonDiscloure"
import DiscoverLiability from "./liability/DiscoverLiability"
import Signature from "./signature/Signature"
import { formValidation } from "./formValidation"
import axios from "axios"
import { BlobProvider, pdf } from "@react-pdf/renderer"
import PDFFile from "../pdfComponent/PDFFile"
import addData from "@/Firebase/addData"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
const FormComponent = () => {
  const [informationError, setInformationError] = useState(false)
  const [signatureMissing, setSignatureMissing] = useState(false)
  const [medicalState, setMedicalState] = useState(medicalStateObject)
  const [informationState, setInformationState] = useState(
    informationStateObject,
  )
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const createPdf = async signature => {
    let file = null
    const generatePdfDocument = async fileName => {
      const blob = await pdf(
        <PDFFile
          informationState={informationState}
          medicalState={medicalState}
          signature={signature}
        />,
      ).toBlob()
      const storage = getStorage()
      const storageRef = ref(storage, fileName)
      uploadBytes(storageRef, blob).then(snapshot => {
        console.log("Uploaded a blob or file!")
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          addData('liability', `${informationState.lastName} - ${informationState.firstName}`, {url: downloadURL})
        })
      })
      FileSaver.saveAs(blob, fileName)
    }
    const fileName = `${informationState.lastName} - ${informationState.firstName} -liability.pdf`

    generatePdfDocument(fileName)
  }

  let sigCanvas = useRef()
  const handleSubmit = async e => {
    e.preventDefault()
    const notValid = await formValidation(informationState)
    const isEmpty = sigCanvas.current.isEmpty()
    let signatureImage = ""
    if (isEmpty === false) {
      signatureImage = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/jpg", { crossOrigin: "anonymous" })
      setSignatureMissing(false)
      if (notValid === false) {
        createPdf(signatureImage)
        console.log("Winner")
        setInformationError(false)
      } else {
        console.log("Participant Information Missing")
        setInformationError(true)
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    } else {
      setSignatureMissing(true)
      console.log("Signature Missing")
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      action={`/`}
      id="contact"
      onSubmit={handleSubmit}
      className="px-2 max-w-4xl mx-auto min-h-[75vh] mb-10"
    >
      <InformationForm
        informationState={informationState}
        setInformationState={setInformationState}
        errors={informationError}
      />

      <MedicalForm
        medicalState={medicalState}
        setMedicalState={setMedicalState}
      />
      <DiscoverNonDiscloure />
      <DiscoverLiability
        firstName={informationState.firstName}
        lastName={informationState.lastName}
      />
      <Signature sigCanvas={sigCanvas} signatureMissing={signatureMissing} />
      <div className="flex mt-10 justify-center items-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormComponent
