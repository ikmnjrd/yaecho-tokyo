import * as React from 'react';
import { Heading } from "@chakra-ui/react";

interface IProps {
  name: string;
}

export const Home: React.FC<IProps> = ({name}) => {

  return (
    <Heading as="h2" size="xl">
        You are Welcome.
    </Heading>
  );
};