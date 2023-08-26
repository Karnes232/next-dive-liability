import React, { useRef, useState } from "react"
import InformationForm from "./standardLiabilityRelease/InformationForm"
import StandardLiabilityRelease from "./standardLiabilityRelease/StandardLiabilityRelease"
import Signature from "./signature/Signature"
import ConsentComponent from "./Consent/ConsentComponent"

const LiabilityReleaseForm = ({ liabilityLocation }) => {
  const [informationError, setInformationError] = useState(false)
  const [consent, setConsent] = useState(false)
  const [signatureMissing, setSignatureMissing] = useState(false)
  const [informationState, setInformationState] = useState({
    firstName: "",
    lastName: "",
  })
  let sigCanvas = useRef()
  const handleSubmit = async e => {
    e.preventDefault()
  }
  return (
    <form
      name="regularLiability"
      method="POST"
      action={`/`}
      id="regularLiability"
      onSubmit={handleSubmit}
      className="px-2 max-w-4xl mx-auto min-h-[75vh] mb-10"
    >
      <InformationForm
        informationState={informationState}
        setInformationState={setInformationState}
        errors={informationError}
      />

      <StandardLiabilityRelease
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

export default LiabilityReleaseForm
