import React from 'react';
import classes from './CatalogPage.module.css';
import Card from '../../components/card/Card';
import { headphones } from './headphones';

const CatalogPage = () => {
  return (
    <div>
      <Card cardData={headphones[0]}/>
    </div>
  );
};

export default CatalogPage;