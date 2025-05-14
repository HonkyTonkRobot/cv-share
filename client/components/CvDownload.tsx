import { Link } from "@chakra-ui/react"

//AI acknowledgement:
// - used AI to learn how to get the raw file from github repo for creating the download link.

function CvDownload() {

  return (
    <Link href="https://raw.githubusercontent.com/HonkyTonkRobot/cv-share/b38eb5f667464858d2c6259571eff89a39515de3/public/cv-joel-anderson-1-page.pdf
" download color="blue.500" fontSize="lg" >Download CV</Link>
  )

}

export default CvDownload
