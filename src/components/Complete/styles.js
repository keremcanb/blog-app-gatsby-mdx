import styled from 'styled-components';

export const HeadingTwo = styled.div`
  margin: 2rem 0;
  .underline {
    width: 5rem;
    height: 5px;
    background: var(--clr-primary-5);
  }
`;

export const Pre = styled.pre`
  background: #1e1e1e;
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
  margin: 3rem 0;
  font-size: 0.9rem;
  font-family: 'Courier New', Courier, monospace;
  overflow-x: scroll;
  .token-line {
    line-height: 1.5;
  }
  .code-tab {
    position: absolute;
    top: 0;
    right: 5%;
    color: rgb(156, 220, 254);
    font-size: 1rem;
    font-weight: 700;
    transform: translateY(-100%);
    text-transform: uppercase;
    padding: 0.05rem 0.85rem 0;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    background: #1e1e1e;
  }
`;

export const Container = styled.article`
  position: relative;
`;

export const Wrapper = styled.blockquote`
  .container {
    padding: 2rem 1.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    color: var(--clr-grey-1);
    border-left: 3px solid var(--clr-grey-5);
    position: relative;
    margin: 2rem 0;
  }
  @media (min-width: 1170px) {
    .container {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }
  .icon {
    position: absolute;
    top: 0;
    left: -3px;
    background: var(--clr-white);
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid var(--clr-white);
  }
  .info {
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    border-color: var(--clr-primary-5);
    .icon {
      color: var(--clr-primary-5);
    }
  }
  .warning {
    background: #fffaeb;
    color: #513c06;
    border-color: #f7d070;
    .icon {
      color: #f7d070;
    }
  }
  .quote {
    @media (min-width: 576px) {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
    font-style: italic;
    color: var(--clr-grey-5);
    line-height: 1.8;
    word-spacing: 3px;
    font-size: 1.2rem;
    margin: 2rem 0;
    .quote-icon {
      font-size: 6rem;
      color: var(--clr-primary-5);
    }
  }
`;

export const CounterWrapper = styled.div`
  max-width: 500px;
  border-radius: var(--radius);
  padding: 1rem 1.5rem;
  background: var(--clr-grey-10);
  text-align: center;
  #value {
    font-size: 6rem;
    font-weight: bold;
  }
  .btn {
    margin: 0.5rem;
  }
  .dec-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
  }
  .dec-btn:hover {
    background: var(--clr-red-light);
    color: var(--clr-red-dark);
  }
  .inc-btn {
    background: var(--clr-green-dark);
    color: var(--clr-white);
  }
  .inc-btn:hover {
    background: var(--clr-green-light);
    color: var(--clr-green-dark);
  }
  .reset-btn {
    background: var(--clr-black);
    color: var(--clr-white);
  }
  .reset-btn:hover {
    background: var(--clr-grey-5);
    color: var(--clr-white);
  }
`;

export const LikeWrapper = styled.div`
  margin: 2rem 0;
  div {
    display: flex;
    align-items: center;
  }
  button {
    font-size: 3.5rem;
    background: transparent;
    border: transparent;
    margin-right: 1rem;
    cursor: pointer;
    color: var(--clr-primary-5);
  }
  p {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.2rem;
  }
  span {
    font-size: 2rem;
    color: var(--clr-primary-5);
    font-weight: 700;
  }
`;

export const RegVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 30vh;
  position: relative;
  margin-bottom: 2rem;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IframeVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;

  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
