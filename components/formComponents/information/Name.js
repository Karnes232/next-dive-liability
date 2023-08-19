import React from "react"

const Name = ({ handleChange, informationState }) => {
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="name"
          name="firstName"
          id="firstName"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
          value={informationState.firstName}
        />
        <label htmlFor="firstName" className="contactFormLabel">
          First Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="name"
          name="lastName"
          id="lastName"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
          value={informationState.lastName}
        />
        <label htmlFor="lastName" className="contactFormLabel">
          Last Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          className="contactFormInput peer min-h-[2.8rem]"
          placeholder=" "
          required
          onChange={handleChange}
          value={informationState.birthdate}
        />
        <label htmlFor="birthdate" className="contactFormLabel">
          Birthdate
        </label>
      </div>
    </>
  )
}

export default Name
