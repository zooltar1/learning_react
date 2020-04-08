import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import Creator from '../Creator/Creator.js';
import {settings, listData} from '../../data/dataStore';

class Column extends React.Component {

  state = {
    cards: this.props.card || [],
  }

  static PropTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    icon: PropTypes.node,
    addCard: PropTypes.func,
    name: PropTypes.node,
  };

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: "list-alt",
            cards: [],
          }
        ]
      }
    ));
  }
  
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>
        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div> 
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={(title) => this.addCard(title)}/>
        </div>

      </section>
    );
  }
}

export default Column;