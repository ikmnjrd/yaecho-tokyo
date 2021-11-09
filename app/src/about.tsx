import * as React from 'react';
import { Heading, Text, Stack } from "@chakra-ui/react";
import ColorModeButton from './colorModeButton';

interface IProps {
  name: string;
}

export const About: React.FC<IProps> = ({name}) => {
  return (
      <>
        <Heading as="h2" size="xl">
          {name}<ColorModeButton/>
        </Heading>
        <Stack>
          <Text fontSize="xl">
            Web Developer in Tokyo</Text>
        </Stack>
      </>
  );
};