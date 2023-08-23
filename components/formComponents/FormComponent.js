"use client"
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from "react"
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
import { medicalValidation } from "./medicalValidation"
import createPdf from "@/Firebase/createPdf"
import ConsentComponent from "./Consent/ConsentComponent"
const FormComponent = () => {
  const [informationError, setInformationError] = useState(false)
  const [consent, setConsent] = useState(false)
  const [medicalError, setMedicalError] = useState(false)
  const [signatureMissing, setSignatureMissing] = useState(false)
  const [medicalState, setMedicalState] = useState(medicalStateObject)
  const [informationState, setInformationState] = useState(
    informationStateObject,
  )
  const [readMoreForm, setReadMoreForm] = useState(false)
  const router = useRouter();
  let sigCanvas = useRef()
  const handleSubmit = async e => {
    e.preventDefault()
    setReadMoreForm(false)
    const notValid = await formValidation(informationState)
    const medicalNotValid = medicalValidation(medicalState)
    const isEmpty = sigCanvas.current.isEmpty()
    let signatureImage = ""
    if (isEmpty === false) {
      signatureImage = sigCanvas.current
        .toDataURL("image/jpg", { crossOrigin: "anonymous" })
      setSignatureMissing(false)
      if (notValid === false && medicalNotValid === false) {
        createPdf(informationState, medicalState, signatureImage)
        console.log("Winner")
        setInformationError(false)
        setMedicalError(false)
        setTimeout(() => {
          console.log("Pushed")
          router.push('https://next-dive.netlify.app/view');
        }, 10000);
        
      } else if (notValid !== false) {
        console.log("Participant Information Missing")
        setInformationError(true)
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else if (medicalNotValid !== false) {
        console.log("Medical Information Missing")
        setInformationError(false)
        setMedicalError(true)
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
        errors={medicalError}
        readMoreForm={readMoreForm}
        setReadMoreForm={setReadMoreForm}
      />
      <DiscoverNonDiscloure />
      <DiscoverLiability
        firstName={informationState.firstName}
        lastName={informationState.lastName}
      />
      <Signature sigCanvas={sigCanvas} signatureMissing={signatureMissing} />
      <ConsentComponent consent={consent} setConsent={setConsent} />
      <div className="flex mt-10 justify-center items-center">
        <button
          type="submit"
          disabled={!consent}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-25"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormComponent
