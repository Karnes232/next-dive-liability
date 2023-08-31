import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"

const imageMimeType = /image\/(png|jpg|jpeg)/i
const CertifiedInformation = ({
  certifiedState,
  setCertifiedState,
  errors,
}) => {
  const { t } = useTranslation()
  const [readMore, setReadMore] = useState(false)
  const [file, setFile] = useState(null)
  const [fileDataURL, setFileDataURL] = useState(null)
  const [fileSizeExceeded, setFileSizeExceeded] = useState(false);
  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setCertifiedState({
      ...certifiedState,
      [e.target.name]: value,
    })
  }

  const imageChangeHandler = e => {
    const file = e.target.files[0]
    console.log(file)
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid")
      return
    }
    if (file.size > maxFileSize) {
      setFileSizeExceeded(true);
      return; // do not process the file if it exceeds the size limit
  }
  setFileSizeExceeded(false)
    setFile(file)
    setCertifiedState({
      ...certifiedState,
      certImage: file,
    })
  }

  useEffect(() => {
    let fileReader,
      isCancel = false
    if (file) {
      fileReader = new FileReader()
      fileReader.onload = e => {
        const { result } = e.target
        if (result && !isCancel) {
          setFileDataURL(result)
          // setCertifiedState({
          //   ...certifiedState,
          //   certImage: result,
          // })
        }
      }
      fileReader.readAsDataURL(file)
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [file])
  const maxFileSize = 500000; // 500Kb
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>{t("CertifiedInfoForm.title")}</div>
        <div>
          <div className="pr-1 text-lg">
            {" "}
            {readMore ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
      </div>
      {errors && (
        <div className="p-2 bg-yellow-300">{t("CertifiedInfoForm.error")}</div>
      )}
      {readMore ? (
        <>
          <section className="p-5 pt-10">
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
                  {t("CertifiedInfoForm.lastDive")}
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
                  {t("CertifiedInfoForm.totalDives")}
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="relative z-0 mb-6 w-2/5 group">
                <input
                  type="date"
                  name="depDate"
                  id="depDate"
                  className="contactFormInput peer min-h-[2.8rem]"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={certifiedState.depDive}
                />
                <label htmlFor="depDate" className="contactFormLabel">
                  {t("CertifiedInfoForm.depDate")}
                </label>
              </div>
              <div className="relative z-0 mb-6 w-2/5 group">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-8 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 "
                >
                  <svg
                    className="w-8 h-8 my-2 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                </label>
                <div className="flex flex-col items-center justify-center">
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="">{t("CertifiedInfoForm.cert")}</span>
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={imageChangeHandler}
                />
              </div>
            </div>
            <div>
            {fileSizeExceeded && (
                        <p className='error'>
                            File size exceeded the limit of {maxFileSize / 1000} KB
                        </p>
                    )}
              {fileDataURL ? (
                <p className="img-preview-wrapper">
                  {<img src={fileDataURL} alt="preview" />}
                </p>
              ) : null}
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
