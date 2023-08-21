import React from "react"
import SignatureCanvas from "react-signature-canvas"
const Signature = ({ sigCanvas, signatureMissing }) => {
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
        <div className="p-2 bg-yellow-300">Signature Is Required</div>
      )}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="self-center mt-5 text-center italic">Participant Signature or, if minor, participant&apos;s  parent/guardian signature required!</div>
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
