import { Button, Img } from "@chakra-ui/react"
import CvRequestForm from "./CvRequestForm"

function App() {
  return (
    <>
      <header className="header">
        <Img w={64} src="/public/images/honkytonk-robot-portrait.png" />
      </header>
      <main>
        <CvRequestForm />
      </main>
    </>
  )
}

export default App
