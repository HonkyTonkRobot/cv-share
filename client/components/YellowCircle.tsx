import { Box, Img } from "@chakra-ui/react";

//AI acknowledgement:
// - used AI to learn about how to make a circle with CSS. and How to do it directly in Chakra-ui

export default function YellowCircle() {
  return (
    <Box position="relative" width="100%" height="300px">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width="200px"
        height="200px"
        backgroundColor="yellow.300"
        borderRadius="50%"
        transform="translate(-50%, -50%)"
        zIndex={0}
      ></Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
      >
        <Img
          w="64"
          src="/images/honkytonk-robot-portrait.png"
          transform="translate(-60%, -40%)"
          zIndex={1}
        />
      </Box>
    </Box>
  )
}
