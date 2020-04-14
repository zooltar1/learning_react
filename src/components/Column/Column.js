import React from 'react';
import styles from './Column.scss';
import propTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
//import Creator from '../Creator/Creator.js';
//import {settings} from '../../data/dataStore';

class Column extends React.Component {

  static propTypes = {
    title: propTypes.string.isRequired,
    cards: propTypes.array.isRequired,
    icon: propTypes.node,
    addCard: propTypes.func,
    name: propTypes.node,
    card: propTypes.node,
  }
  
  render() {
    const {cards, title, icon} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div> 
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={(title) => this.addCard(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default Column;