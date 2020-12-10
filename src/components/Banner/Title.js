import React from 'react';
import { TitleWrapper } from './styles';

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h4>{title}</h4>
      <div className="line" />
    </TitleWrapper>
  );
};

export default Title;
