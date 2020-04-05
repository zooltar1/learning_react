import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image} img src={props.titleImage} />
  </header>
);

Hero.PropTypes = {
  titleText: PropTypes.node.isRequired,
  titleImage: PropTypes.string.isRequired,
};

export default Hero;