import React from 'react';
import About from './About';
import Instagram from './Instagram';
import Recent from './Recent';
import BannerCategories from './BannerCategories';
import { Wrapper } from './styles';

const Banner = () => (
  <Wrapper>
    <About />
    <Instagram />
    <Recent />
    <BannerCategories />
  </Wrapper>
);

export default Banner;
