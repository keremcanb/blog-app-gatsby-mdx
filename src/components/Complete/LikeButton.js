import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { LikeWrapper } from './styles';

const LikeButton = () => {
  const [value, setValue] = useState(0);

  return (
    <LikeWrapper>
      <div>
        <button onClick={() => setValue(value + 1)}>
          <AiOutlineLike />
        </button>

        <p>
          Liked the post?
          <br />
          Click thumbs up few times
        </p>
      </div>

      <span>+{value}</span>
    </LikeWrapper>
  );
};

export default LikeButton;
