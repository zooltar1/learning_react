import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {

  static PropTypes = {
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
    third: PropTypes.string.isRequired,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{[this.props.first, this.props.second, this.props.third]}
        </h3>
      </section>
    )
  }
}

export default Column;