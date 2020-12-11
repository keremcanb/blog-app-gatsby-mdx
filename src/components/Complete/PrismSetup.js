/* eslint-disable no-shadow */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { Container, Pre } from './styles';

const PrismWrapper = ({ children }) => {
  const { className } = children.props;
  const language = className.split('-')[1];

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Container>
          <Pre className={className} style={style}>
            <div className="code-tab">{language}</div>

            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </Container>
      )}
    </Highlight>
  );
};

export default PrismWrapper;
