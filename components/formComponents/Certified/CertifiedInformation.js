import React, { useEffect, useState } from "react"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"


const imageMimeType = /image\/(png|jpg|jpeg)/i;
const CertifiedInformation = ({
  certifiedState,
  setCertifiedState,
  errors,
}) => {
  const [readMore, setReadMore] = useState(false)
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setCertifiedState({
      ...certifiedState,
      [e.target.name]: value,
    })
  }

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
    setCertifiedState({
        ...certifiedState,
        certImage: file,
      })
  }

  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);

  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>Certification Information</div>
        <div>
          <div className="pr-1 text-lg">
            {" "}
            {readMore ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
      </div>
      {errors && (
        <div className="p-2 bg-yellow-300">
          Participant Information Is Required
        </div>
      )}
      {readMore ? (
        <>
          <section className="p-5">
            <div className="flex justify-between">
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="date"
                  name="lastDive"
                  id="lastDive"
                  className="contactFormInput peer min-h-[2.8rem]"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={certifiedState.lastDive}
                />
                <label htmlFor="lastDive" className="contactFormLabel">
                  Last Dive
                </label>
              </div>
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="number"
                  name="totalDives"
                  id="totalDives"
                  className="contactFormInput peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={certifiedState.totalDives}
                />
                <label htmlFor="totalDives" className="contactFormLabel">
                  Number of Dives
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="date"
                  name="depDive"
                  id="depDive"
                  className="contactFormInput peer min-h-[2.8rem]"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={certifiedState.depDive}
                />
                <label htmlFor="depDive" className="contactFormLabel">
                  Depature Date
                </label>
              </div>
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="file"
                  name="certImage"
                  id="certImage"
                  className="contactFormInput peer"
                  accept="image/*"
                  placeholder=" "
                  required
                  onChange={imageChangeHandler}
                />
                <label htmlFor="certImage" className="contactFormLabel">
                  Upload Certification
                </label>
              </div>
            </div>
            <div>
            {fileDataURL ?
        <p className="img-preview-wrapper">
          {
            <img src={fileDataURL} alt="preview" />
          }
        </p> : null}
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CertifiedInformation
