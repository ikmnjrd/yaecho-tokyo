import * as React from 'react';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

interface IProps {
  name: string;
}

export const About: React.FC<IProps> = ({name}) => {

  return (
      <>
        <h2>{name}</h2>
        <UnorderedList>
          <ListItem>
            <summary>Who?</summary>
            <blockquote>
              This Web Developer vend myself
            </blockquote>
          </ListItem>

          <ListItem>
            <summary>How?</summary>
            <blockquote>
              Relentless, Reckless Forever
            </blockquote>
          </ListItem>

          <ListItem>
            <summary>Where?</summary>
            <blockquote>
              in Tokyo.
            </blockquote>
          </ListItem>
        </UnorderedList>
      </>
  );
};