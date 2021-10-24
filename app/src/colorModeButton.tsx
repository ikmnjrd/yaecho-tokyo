import * as React from 'react';
import { Box, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box onClick={toggleColorMode} display="inline" >
      {colorMode === "light" ? <SunIcon viewBox="0 0 20 30" /> : <MoonIcon viewBox="0 0 20 30"/>}
    </Box>
  )
}