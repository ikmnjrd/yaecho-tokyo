import * as React from 'react';

interface IProps {
  name: string;
}

export const SubComponent: React.FC<IProps> = ({name}) => {
  const [count, setCount] = React.useState(0);

  const handleClick =() => {
    setCount(count+1);
  }

  return (
      <div>
        <h2>{name}</h2>
        <div>{count}</div>
        <button onClick={() => handleClick()}>Add</button>
        <details>
          <summary>Click me!</summary>
          <p>Lorem ipsum dolor sit amet.</p>
        </details>    
      </div>
  );
};