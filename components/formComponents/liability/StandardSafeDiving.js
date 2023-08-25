import {
  standardSafeStatement1,
  standardSafeStatement10,
  standardSafeStatement11,
  standardSafeStatement12,
  standardSafeStatement13,
  standardSafeStatement2,
  standardSafeStatement3,
  standardSafeStatement4,
  standardSafeStatement5,
  standardSafeStatement6,
  standardSafeStatement7,
  standardSafeStatement8,
  standardSafeStatement9,
} from "@/data/standardSafeDiving"
import React, { useState } from "react"
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs"

const StandardSafeDiving = ({ firstName, lastName }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full flex justify-between items-center"
        onClick={e => setReadMore(!readMore)}
      >
        <div>Standard Safe Diving Practices Statement of Understanding</div>
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
                dangerouslySetInnerHTML={{ __html: standardSafeStatement1 }}
              />
              <p className="text-gray-700 text-base m-4">
                {" "}
                I,
                <span className="italic">
                  {" "}
                  {firstName} {lastName}
                </span>
                , {standardSafeStatement2}
              </p>
              <ol type="1" className="list-decimal ml-4">
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement3 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement4 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement5 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement6 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement7 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement8 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement9 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement10 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement11 }}
                />
                <li 
                     className="text-gray-700 text-base m-4 pl-1"
                     dangerouslySetInnerHTML={{ __html: standardSafeStatement12 }}
                />
              </ol>
              <p
                className="text-gray-700 text-base m-4"
                dangerouslySetInnerHTML={{ __html: standardSafeStatement13 }}
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

export default StandardSafeDiving
