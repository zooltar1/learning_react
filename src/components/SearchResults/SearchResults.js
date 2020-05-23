import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';


class SearchResults extends React.Component {

  static propTypes = {
    cards: this.propTypes.array,
  }

  render() {
    const {cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.cards}>
            {cards.map((cardData) => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }

}

export default SearchResults;