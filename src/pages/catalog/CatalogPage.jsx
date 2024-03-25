import React from 'react';
import classes from './CatalogPage.module.css';
import { headphones } from './headphones'
import CatalogCard from '../../components/card/CatalogCard';

const CatalogPage = () => {

  return (
    <div className={classes['catalog']}>
      {
        (() => {
          const sections = [];
          for (let title in headphones)
            sections.push(
              <section className={classes['catalog__section']} key={sections.length}>
                <h2 className={classes['catalog__section-title']}>{title}</h2>
                {headphones[title].map(headphone => <CatalogCard key={headphone.id} cardData={headphone}/>)}
              </section>
          )
          return sections;
        })()
      }
    </div>
  );
};

export default CatalogPage;