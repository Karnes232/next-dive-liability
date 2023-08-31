import PDFFileCertified from "@/components/pdfComponent/PDFFileCertified"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import addData from "./addData"
import uniqid from "uniqid"
import * as FileSaver from "file-saver"
import { pdf } from "@react-pdf/renderer"
import Compressor from "compressorjs"
const { detect } = require("detect-browser")
const browser = detect()
export default async function createCertPdf(
  informationState,
  medicalState,
  signature,
  certifiedState,
  liabilityLocation,
) {
  let file = null
  let today = new Date()
  const fileName = `${informationState.lastName} - ${informationState.firstName} -liability - ${uniqid()}.pdf`
  new Compressor(certifiedState.certImage, {
    quality: 0.1,
    success(result) {
      let fileReader,
        isCancel = false
      fileReader = new FileReader()
      fileReader.onload = e => {
        const { result } = e.target
        if (result && !isCancel) {
          generatePdfDocument(fileName, result)
        }
      }
      fileReader.readAsDataURL(result)

      const generatePdfDocument = async (fileName, compressedFile) => {
        const certImage = compressedFile
        const blob = await pdf(
          <PDFFileCertified
            informationState={informationState}
            medicalState={medicalState}
            signature={signature}
            certImage={certImage}
            certifiedState={certifiedState}
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
        })
        if (browser.name !== "ios") {
          FileSaver.saveAs(blob, fileName)
        }
      }
    },
    error(err) {
      console.log(err.message)
    },
  })
}
