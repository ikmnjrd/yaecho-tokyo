import * as React from 'react';
import { Heading, Text } from "@chakra-ui/react";

interface IProps {
  name: string;
}

export const Home: React.FC<IProps> = ({name}) => {

  return (
    <>
      <Heading as="h2" size="xl">
          This is HOME
      </Heading>
      <Text fontSize="xl">
        You are Welcome.
      </Text>
    </>
  );
};