import { Button, Container, Flex, Img } from "@chakra-ui/react"
import CvRequestForm from "./CvRequestForm"

function App() {
  return (
    <>
      <header className="header">
        <Flex justifyContent='center'>
          <Img w={64} src="/public/images/honkytonk-robot-portrait.png" />
        </Flex>
      </header>
      <main>
        <Container >
          <CvRequestForm />
        </Container>
      </main>
    </>
  )
}

export default App
