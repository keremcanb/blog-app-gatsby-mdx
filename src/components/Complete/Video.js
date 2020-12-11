import React from 'react';
import styled from 'styled-components';
import video from '../../../../connect.mp4';
// import video from '../../assets/connect.mp4';
import { RegVideoWrapper, IframeVideoWrapper } from './styles';

export const RegVideo = () => (
  <RegVideoWrapper>
    <video controls autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
  </RegVideoWrapper>
);

export const Video = ({ src, title, ...props }) => (
  <IframeVideoWrapper>
    <div className="video">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  </IframeVideoWrapper>
);

Video.defaultProps = {
  src: 'https://www.youtube.com/embed/-8ORfgUa8ow',
  title: 'the best html css tutorial ever !'
};
