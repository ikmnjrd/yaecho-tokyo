import * as React from 'react';
import { Heading, Text, Stack, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

interface IProps {
  name: string;
}

export const About: React.FC<IProps> = ({name}) => {

  return (
      <>
        <Heading as="h2" size="xl">{name}</Heading>
        <Stack>
          <Text fontSize="xl">
            Web Developer in Tokyo</Text>
        </Stack>
      </>
  );
};