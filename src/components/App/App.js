import React from 'react';
import styles from './App.scss';
import propTypes from 'prop-types';
import List from '../List/ListContainer';

class App extends React.Component {

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
          <List key={listData.id} {...listData} />
        ))}
          
      </main>
    );
  }
}

export default App;
