import React from 'react';
import Categories from '../Categories';
import Title from './Title';
import { BannerCategoriesWrapper } from './styles';

const BannerCategories = () => {
  return (
    <BannerCategoriesWrapper>
      <Title title="Categories" />

      <Categories />
    </BannerCategoriesWrapper>
  );
};

export default BannerCategories;
