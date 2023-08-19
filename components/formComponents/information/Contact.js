import React from "react"

const Contact = ({ handleChange, informationState }) => {
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="email"
          id="email"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
          value={informationState.email}
        />
        <label htmlFor="email" className="contactFormLabel">
          Email address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          id="telephone"
          type="tel"
          name="telephone"
          placeholder=" "
          className="contactFormInput peer"
          onChange={handleChange}
          value={informationState.telephone}
        />
        <label htmlFor="telephone" className="contactFormLabel">
          Enter phone number
        </label>
      </div>
    </>
  )
}

export default Contact
