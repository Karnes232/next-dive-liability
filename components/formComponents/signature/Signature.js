import React from "react"
import { useTranslation } from "react-i18next"
import SignatureCanvas from "react-signature-canvas"
const Signature = ({ sigCanvas, signatureMissing }) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col ">
      <div className="border rounded-md border-slate-500 h-48">
        <SignatureCanvas
          penColor="black"
          ref={sigCanvas}
          clearOnResize={false}
          canvasProps={{
            width: "",
            height: "",
            className: "sigCanvas w-full h-full",
          }}
        />
      </div>
      {signatureMissing && (
        <div className="p-2 bg-yellow-300">{t("Signature.error")}</div>
      )}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="self-center mt-5 text-center italic">
          {t("Signature.title")}
        </div>
        <button
          className="mt-4 self-end w-24 border rounded bg-slate-200 py-1"
          onClick={() => sigCanvas.current.clear()}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default Signature
