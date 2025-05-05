import { Box, Heading, Text, VStack } from "@chakra-ui/react"

function CvRequestForm() {
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
    </VStack >
  )
}

export default CvRequestForm
