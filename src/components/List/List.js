import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer';
//import Creator from '../Creator/Creator.js';
import propTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {

  static propTypes = {
    title: propTypes.node.isRequired,
    image: propTypes.string.isRequired,
    description: propTypes.node.isRequired,
    columns: propTypes.array.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {

    const {columns, title, image, description} = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default List;