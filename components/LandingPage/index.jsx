import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Products from './Products';

export default function LandingPage() {
  return (
    <Box bgColor="#5A12A3">
      <Header />
      <Hero />
      <Products />
      <HowItWorks />
      <Footer />
    </Box>
  );
}
