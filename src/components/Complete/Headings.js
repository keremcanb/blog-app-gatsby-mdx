import React from 'react';
import { HeadingTwo } from './styles';

const myH2 = ({ children, title }) =>
  title ? (
    <HeadingTwo>
      <h2>{children}</h2>
      <div className="underline" />
    </HeadingTwo>
  ) : (
    <h2
      style={{
        margin: '2rem 0',
        color: 'var(--clr-grey-5)'
      }}
    >
      {children}
    </h2>
  );

const myH4 = ({ children }) => (
  <h3 style={{ margin: '2rem 0', color: 'var(--clr-primary-5)' }}>
    {children}
  </h3>
);

export { myH2, myH4 };
