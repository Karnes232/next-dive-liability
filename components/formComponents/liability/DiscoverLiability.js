import React, { useState } from "react"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"
import {
  liabilityRelease1,
  liabilityRelease10,
  liabilityRelease11,
  liabilityRelease12,
  liabilityRelease2,
  liabilityRelease3,
  liabilityRelease4,
  liabilityRelease5,
  liabilityRelease6,
  liabilityRelease7,
  liabilityRelease8,
  liabilityRelease9,
} from "../../../data/liabilityRelease"
const DiscoverLiability = ({ firstName, lastName }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>Liability Release and Assumption of Risk Agreement</div>
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
              <p className="text-gray-700 text-base m-4">
                {" "}
                I,
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {liabilityRelease1}
              </p>
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease2 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease3 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease4 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease5 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease6 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease7 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease8 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease9 }}
              />
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease10 }}
              />
              <p className="text-gray-700 text-base m-4">
                {" "}
                I,
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {liabilityRelease11}
              </p>
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: liabilityRelease12 }}
              />
            </section>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default DiscoverLiability
