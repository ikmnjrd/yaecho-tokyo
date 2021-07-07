import * as React from 'react';

interface IProps {
  name: string;
}

export const About: React.FC<IProps> = ({name}) => {

  return (
      <div>
        <h2>{name}</h2>
        <details>
          <summary>Who?</summary>
          <blockquote>
            This Web Developer vend myself
          </blockquote>
        </details>

        <details>
          <summary>How?</summary>
          <blockquote>
            Relentless, Reckless Forever
          </blockquote>
        </details>

        <details>
          <summary>Where?</summary>
          <blockquote>
            in Tokyo.
          </blockquote>
        </details>
      </div>
  );
};