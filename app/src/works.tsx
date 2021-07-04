import * as React from 'react';

interface IProps {
  name: string;
}

export const Works: React.FC<IProps> = ({name}) => {

  return (
      <div>
        works
      </div>
  );
};