import React from 'react';
import styles from './Home.scss';
import propTypes from 'prop-types';
import ListLink from '../ListLink/ListLink';

class Home extends React.Component {

  static propTypes = {
    title: propTypes.node,
    subtitle: propTypes.node,
    lists: propTypes.array,
  }

  render() {
    const {lists, title, subtitle} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
          
      </main>
    );
  }
}

export default Home;
