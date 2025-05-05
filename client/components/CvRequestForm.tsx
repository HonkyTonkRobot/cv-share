import { Box, Heading, Text, VStack } from "@chakra-ui/react"

function CvRequestForm() {
  return (
    <VStack >
      <Heading as='h2' size='2xl'>
        Thanks for your interest
      </Heading>
      <Text fontSize='lg'>
        I kindly request your name and company before download
      </Text>
      <Text fontSize='lg'>
        I&apos;d love to know who&apos;s checking out my work. I may follow up via LinkedIn or email to connect. Always happy to chat!
      </Text>
    </VStack>
  )
}

export default CvRequestForm
