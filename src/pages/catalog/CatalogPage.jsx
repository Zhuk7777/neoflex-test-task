import React from 'react';
import classes from './CatalogPage.module.css';
import Card from '../../components/card/Card';
import { headphones } from './headphones';

const CatalogPage = () => {

  return (
    <div className={classes['catalog']}>
      {
        (() => {
          const sections = [];
          for (let title in headphones)
            sections.push(
              <section className={classes['catalog__section']}>
                <h2 className={classes['catalog__section-title']}>{title}</h2>
                {headphones[title].map(headphone => <Card cardData={headphone}/>)}
              </section>
          )
          return sections;
        })()
      }
    </div>
  );
};

export default CatalogPage;