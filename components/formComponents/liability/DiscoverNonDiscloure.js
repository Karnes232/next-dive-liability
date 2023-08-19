import React, { useState } from "react"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"
import { nonDisclouser } from "../../../data/nonDisclosure"
const DiscoverNonDiscloure = () => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>Non-Agency Disclosure and Acknowledgment Agreement</div>
        <div>
          <div className="pr-1 text-lg">
            {" "}
            {readMore ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
          </div>
        </div>
      </div>

      {readMore ? (
        <>
          <div className="mt-2">
            <section className="m-2 block bg-white border border-gray-200 rounded-lg shadow">
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: nonDisclouser }}
              ></p>
            </section>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default DiscoverNonDiscloure
