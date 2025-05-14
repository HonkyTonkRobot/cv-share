import { Container, Flex, Heading, Img, VStack } from "@chakra-ui/react"

import CvRequestForm from "./CvRequestForm"
import CvDownload from "./CvDownload"

import { useState } from "react"

// AI acknowledgement:
// I used to confirm my suspicion on how to conditionally render the right component without using useParams.

function App() {
  // Use state to manage what page is rendered so URL stays the same.
  // Question: How do I protect it from the server side, so you can't just look at the code and navigate to it?
  // Question: Do I pass props to see when submit is clicked to change which page component renders on the App component? The AI answer I received is that yes you pass a handler function as a prop, and then return those values back to the parent to update state.
  //
  // Breaking my plan down into pseudo-code
  // 1.[x] create useState(false) for formSubmitted
  // 2. [x] create handleFormSubmitted function that updates the setFormSubmitted useState
  // 3. [x] pass the handleFormSubmitted function as a prop in CvRequestForm
  // 4. [x] Create conditional render for <CvDownload/> component based on useState

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', company: '' })

  const handleFormSubmitted = (data: { name: string; company: string }) => {
    setFormSubmitted(true)
    setFormData(data)
  }

  return (
    <>
      <header className="header">
        <Flex justifyContent='center'>
          <Img w={64} src="/images/honkytonk-robot-portrait.png" />
        </Flex>
      </header>
      <main>
        <Container
          maxW='79ch'
          display='flex'
          flexDir='column'
          justifyContent='center'
        >
          <VStack>
            {formSubmitted
              ? (
                <>
                  <Heading as="h2" size="lg" paddingTop={4}>
                    {`Thanks ${formData?.name}!`}
                  </Heading>
                  <CvDownload />
                </>
              )
              : <CvRequestForm onSubmit={handleFormSubmitted} />
            }
          </VStack>
        </Container>
      </main>
    </>
  )
}

export default App
