import React from "react"

const ConsentComponent = ({consent, setConsent}) => {
    const handleChange = (e) => {
        setConsent(e.target.checked)
    }
  return (
    <div className="mt-5 flex space-x-2">
      <input
        type="checkbox"
        id="consent"
        name="consent"
        className="self-start"
        onChange={handleChange}
      />
      <label for="consent" className="text-xs">
        By checking here, you are consenting to the use of your electronic
        signature in lieu of an original signature on paper. You have the right
        to request that you sign a paper copy instead. By checking here, you are
        waiving that right. After consent,you may, upon written request to us,
        obtain a paper copy of an electronic record. No fee will be charged for
        such copy and no special hardware or software is required to view it.
        Your agreement to use an electronic signature with us for any documents
        will continue until such time as you notify us in writing that you no
        longer wish to use an electronic signature. There is no penalty for
        withdrawing your consent. You should always make sure that we have a
        current email address in order to contact you regarding any changes, if
        necessary.
      </label>
    </div>
  )
}

export default ConsentComponent
