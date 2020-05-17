import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { pageContents } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero
      titleText={pageContents.faq.title}
      image={pageContents.faq.image}>
    </Hero>
    <h2>{pageContents.faq.description}</h2>
  </Container>
);


export default FAQ;