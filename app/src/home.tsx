import * as React from 'react';

interface IProps {
  name: string;
}

export const Home: React.FC<IProps> = ({name}) => {

  return (
      <h2>
        You are Welcome.
      </h2>
  );
};