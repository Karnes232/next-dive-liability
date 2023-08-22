import PDFFile from "@/components/pdfComponent/PDFFile"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import addData from "./addData"
import uniqid from "uniqid"
import * as FileSaver from "file-saver"
import { pdf } from "@react-pdf/renderer"
export default async function createPdf(
  informationState,
  medicalState,
  signature,
) {
  let file = null
  let today = new Date()
  const generatePdfDocument = async fileName => {
    const blob = await pdf(
      <PDFFile
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
        addData("liability", `${informationState.lastName} - ${uniqid()}`, {
          url: downloadURL,
          created: today,
          name: `${informationState.lastName}, ${informationState.firstName}`,
        })
      })
    })
    FileSaver.saveAs(blob, fileName)
  }
  const fileName = `${informationState.lastName} - ${informationState.firstName} -liability.pdf`

  generatePdfDocument(fileName)
}
