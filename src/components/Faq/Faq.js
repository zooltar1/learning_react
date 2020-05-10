import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import propTypes from 'prop-types';

class Faq extends React.Component {

  static propTypes = {
    title: propTypes.node.isRequired,
    image: propTypes.string.isRequired,
  }

  render () {

    const {title, image} = this.props;

    return (
      <Container>
        <Hero titleText={title} image={image} />
        <h2>some text 2</h2>
      </Container>
    );
  }
}

export default Faq;