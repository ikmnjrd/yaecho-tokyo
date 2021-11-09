import * as React from 'react';
import { Box, Text, Link, Stack, Divider, Heading } from "@chakra-ui/react"
import ColorModeButton from './colorModeButton';

interface IProps {
  name: string;
}

export const Works: React.FC<IProps> = ({name}) => {

  return (
    <>
      <Heading as="h2" size="xl">
        {name}<ColorModeButton />
      </Heading>
      <Stack spacing="24px">
        <Divider />
        <Box>
          <Text fontSize="xl">LINE Mini App to Reservation</Text>
          <Link href="https://liff.line.me/1655848278-r4JE9GYg">https://liff.line.me/1655848278-r4JE9GYg</Link>
        </Box>
        <Divider />
        <Box>
          <Text fontSize="xl">Drawing Game App</Text>
          <Link href="https://museulium.com/">https://museulium.com</Link>
        </Box>
        <Divider />
        <Box>
          <Text fontSize="xl">Memo Tool for the AMONG US</Text>
          <Link href="https://amongus-ike-tool.web.app/">https://amongus-ike-tool.web.app</Link>
        </Box>
      </Stack>
    </>
  );
};