import React from 'react';
import { FiInfo } from 'react-icons/fi';
import { TiWarningOutline } from 'react-icons/ti';
import { GoQuote } from 'react-icons/go';
import { Wrapper } from './styles';

const Blockquote = ({ children, display }) => {
  switch (display) {
    case 'warning':
      return (
        <Wrapper>
          <div className="container warning">
            <TiWarningOutline className="icon" />
            {children}
          </div>
        </Wrapper>
      );
    case 'info':
      return (
        <Wrapper>
          <div className="container info">
            <FiInfo className="icon" />
            {children}
          </div>
        </Wrapper>
      );
    case 'default':
      return (
        <Wrapper>
          <div className="container default">{children}</div>
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <div className="quote">
            <GoQuote className="quote-icon" />
            {children}
          </div>
        </Wrapper>
      );
  }
};

export default Blockquote;
