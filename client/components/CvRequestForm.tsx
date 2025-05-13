import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"
import useAddProspect from "../apis/use-add-prospect"

// NOTE: How AI was used on this page
// - to get the regex for email's and linkedin
// - to learn what the .test() method did in JavaScript so that I can apply it, and understand what it is doing.
// - Used AI to troubleshoot why my handleEmailBlur was not working, and learned that I couldn't render JSX from a handle blur the way I was trying it, though as I type this I remember I've done, entirely new returns from functions outside the original return. I ended up using the handle blur to change the state and adding that state as a condition in the ternary for the error messages.

const initialFormState = {
  name: '', company: '', email: '', linkedin: ''
}

function CvRequestForm() {
  // const [emailInput, setEmailInput] = useState('')
  const [emailBlurred, setEmailBlurred] = useState(false)
  // const [linkedInInput, setLinkedInInput] = useState('')
  const [linkedInBlurred, setLinkedInBlurred] = useState(false)
  const [formState, setFormState] = useState(initialFormState)
  const addProspectMutation = useAddProspect()

  // const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setEmailInput(e.target.value)
  // }

  // const handleLinkedInChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setLinkedInInput(e.target.value)
  // }

  const handleEmailBlur = () => {
    setEmailBlurred(true)
  }

  const handleLinkedInBlur = () => {
    setLinkedInBlurred(true)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addProspectMutation.mutate({
      name: formState.name,
      company: formState.company,
      email: formState.email,
      linkedin: formState.linkedin,
    })
    setFormState(initialFormState)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    setFormState({ ...formState, [event.target.name as string]: inputText })
  }

  const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "i")
  const isEmail = emailRegex.test(formState.email)

  const linkedInRegex = new RegExp("^(https?:\\/\\/)?(www\\.)?linkedin\\.com\\/in\\/.*$", "i")
  const isLinkedIn = linkedInRegex.test(formState.linkedin)


  console.log(formState)
  return (
    <VStack>
      <Heading as='h2' size='2xl' padding={2}>
        Thanks for your interest!
      </Heading>
      <Box maxW='72ch'>
        <Text fontSize='lg' paddingBottom={2}>
          I kindly request your name and company before download
        </Text>
        <Text fontSize='lg' paddingBottom={2}>
          I&apos;d love to know who&apos;s checking out my work. I may follow up via LinkedIn or email to connect. Always happy to chat!
        </Text>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired >
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input placeholder='Full Name' type="text" name="name" id="name" value={formState.name} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="company">Company</FormLabel>
          <Input placeholder='Company name' type="text" name="company" id="company" value={formState.company} onChange={handleChange} />
        </FormControl>
        <FormControl isInvalid={!isEmail && formState.email !== ''} >
          <FormLabel htmlFor="email">Email <small>(optional)</small></FormLabel>
          <Input type='email' name="email" id="email" value={formState.email} placeholder='Email' onChange={handleChange} onBlur={handleEmailBlur} />
          {!isEmail && !emailBlurred ? ""
            : (
              <FormErrorMessage>
                Email is invalid
              </FormErrorMessage>
            )}
        </FormControl>
        <FormControl isInvalid={!isLinkedIn && formState.linkedin !== ''} >
          <FormLabel htmlFor="linkedin">LinkedIn <small>(optional)</small></FormLabel>
          <Input placeholder='LinkedIn' type="text" name="linkedin" id="linkedin" value={formState.linkedin} onChange={handleChange} onBlur={handleLinkedInBlur} />
          {
            !isLinkedIn && !linkedInBlurred ? ""
              : (
                <FormErrorMessage>
                  Linkedin is invalid :(
                </FormErrorMessage>
              )
          }
        </FormControl>
        <Button mt={4} type='submit'>Submit</Button>
      </form>
    </VStack >
  )
}

export default CvRequestForm
