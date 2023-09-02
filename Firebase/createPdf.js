import PDFFileDSD from "@/components/pdfComponent/PDFFileDSD"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import addData from "./addData"
import uniqid from "uniqid"
import * as FileSaver from "file-saver"
import { pdf } from "@react-pdf/renderer"
const { detect } = require("detect-browser")
const browser = detect()
export default async function createPdf(
  informationState,
  medicalState,
  signature,
  liabilityLocation,
) {
  let file = null
  let today = new Date()
  const generatePdfDocument = async fileName => {
    const blob = await pdf(
      <PDFFileDSD
        informationState={informationState}
        medicalState={medicalState}
        signature={signature}
      />,
    ).toBlob()
    const storage = getStorage()
    const storageRef = ref(storage, fileName)
    uploadBytes(storageRef, blob).then(snapshot => {
      console.log("Uploaded a blob or file!")
      getDownloadURL(snapshot.ref).then(downloadURL => {
        addData(
          liabilityLocation,
          `${informationState.lastName} - ${uniqid()}`,
          {
            url: downloadURL,
            created: today,
            name: `${informationState.lastName}, ${informationState.firstName}`,
          },
        )
      })
    }).then(e => window.location.href = "https://dive-liability.netlify.app/")
    if (browser.name !== "ios") {
      FileSaver.saveAs(blob, fileName)
    }
  }
  const fileName = `${informationState.lastName} - ${
    informationState.firstName
  } - liability - ${uniqid()}.pdf`

  generatePdfDocument(fileName)
}
