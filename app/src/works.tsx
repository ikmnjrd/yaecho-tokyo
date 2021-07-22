import * as React from 'react';

interface IProps {
  name: string;
}

export const Works: React.FC<IProps> = ({name}) => {

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>
          <a href="https://amongus-ike-tool.web.app/">https://amongus-ike-tool.web.app</a>
        </li>
        <li>
          <a href="https://museulium.com/">https://museulium.com</a>
        </li>
      </ul>
    </div>
  );
};