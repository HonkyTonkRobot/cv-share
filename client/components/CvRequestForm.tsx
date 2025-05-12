import { Box, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"

// NOTE: How AI was used on this page
// - to get the regex for email's and linkedin
// - to learn what the .test() method did in JavaScript so that I can apply it, and understand what it is doing.

function CvRequestForm() {
  const [emailInput, setEmailInput] = useState('')
  const [emailBlurred, setEmailBlurred] = useState(false)
  const [linkedInInput, setLinkedInInput] = useState('')
  const [linkedInBlurred, setLinkedInBlurred] = useState(false)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value)
  }

  const handleLinkedInChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkedInInput(e.target.value)
  }

  const handleEmailBlur = () => {
    setEmailBlurred(true)
  }

  const handleLinkedInBlur = () => {
    setLinkedInBlurred(true)
  }

  const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")
  const isEmail = emailRegex.test(emailInput)

  const linkedInRegex = new RegExp("^(https?:\\/\\/)?(www\\.)?linkedin\\.com\\/in\\/.*$")
  const isLinkedIn = linkedInRegex.test(linkedInInput)



  return (
    <VStack>
      <Heading as='h2' size='2xl' padding={2}>
        Thanks for your interest!
      </Heading>
      <Box maxW='100ch'>
        <Text fontSize='lg' paddingBottom={2}>
          I kindly request your name and company before download
        </Text>
        <Text fontSize='lg' paddingBottom={2}>
          I&apos;d love to know who&apos;s checking out my work. I may follow up via LinkedIn or email to connect. Always happy to chat!
        </Text>
      </Box>
      {/* <form> */}
      <FormControl isRequired >
        <FormLabel>Full Name</FormLabel>
        <Input placeholder='Full Name' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Company</FormLabel>
        <Input placeholder='Company name' />
      </FormControl>
      <FormControl isInvalid={!isEmail && emailInput !== ''} >
        <FormLabel>Email</FormLabel>
        <Input type='email' value={emailInput} placeholder='Email' onChange={handleEmailChange} onBlur={handleEmailBlur} />
        {!isEmail && !emailBlurred ? ""
          : (
            <FormErrorMessage>
              Email is invalid
            </FormErrorMessage>
          )}
      </FormControl>
      <FormControl isInvalid={!isLinkedIn && linkedInInput !== ''} >
        <FormLabel>LinkedIn</FormLabel>
        <Input placeholder='LinkedIn' value={linkedInInput} onChange={handleLinkedInChange} onBlur={handleLinkedInBlur} />
        {
          !isLinkedIn && !linkedInBlurred ? ""
            : (
              <FormErrorMessage>
                Linkedin is invalid :(
              </FormErrorMessage>
            )
        }
      </FormControl>
      {/* <Button mt={4} type='submit'>Submit</Button> */}
      {/* </form> */}
    </VStack >
  )
}

export default CvRequestForm
