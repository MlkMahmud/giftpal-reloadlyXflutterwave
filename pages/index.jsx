import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/LandingPage/Header';
import Hero from '../components/LandingPage/Hero';
import HowItWorks from '../components/LandingPage/HowItWorks';
import Products from '../components/LandingPage/Products';

export default function Index() {
  return (
    <Box bgColor="#5A12A3">
      <Header />
      <Hero />
      <Products />
      <HowItWorks />
    </Box>
  );
}
