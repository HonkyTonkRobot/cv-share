import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"

// NOTE: How AI was used on this page
// - to get the regex for email's
// - to learn what the .test() method did in JavaScript so that I can apply it, and understand what it is doing.

function CvRequestForm() {
  const [input, setInput] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setInput(e.target.value)
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isEmail = emailRegex.test(input)



  return (
    <VStack>
      <Heading as='h2' size='2xl' padding={2}>
        Thanks for your interest
      </Heading>
      <Box maxW='70ch'>
        <Text fontSize='lg' paddingBottom={2}>
          I kindly request your name and company before download
        </Text>
        <Text fontSize='lg' paddingBottom={2}>
          I&apos;d love to know who&apos;s checking out my work. I may follow up via LinkedIn or email to connect. Always happy to chat!
        </Text>
      </Box>
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder='Full Name' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Company</FormLabel>
        <Input placeholder='Company name' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type='email' value={input} placeholder='Email' onChange={handleChange} />
        {isEmail ? ""
          : (
            <FormErrorMessage>Email is Invalid</FormErrorMessage>
          )}
      </FormControl>
    </VStack >
  )
}

export default CvRequestForm
