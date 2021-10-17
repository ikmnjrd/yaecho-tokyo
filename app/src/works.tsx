import * as React from 'react';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

interface IProps {
  name: string;
}

export const Works: React.FC<IProps> = ({name}) => {

  return (
    <div>
      <h2>{name}</h2>
      <UnorderedList>
        <ListItem>
          <a href="https://amongus-ike-tool.web.app/">https://amongus-ike-tool.web.app</a>
        </ListItem>
        <ListItem>
          <a href="https://museulium.com/">https://museulium.com</a>
        </ListItem>
      </UnorderedList>
    </div>
  );
};