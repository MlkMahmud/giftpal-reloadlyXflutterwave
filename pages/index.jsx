import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/LandingPage/Header';
import Hero from '../components/LandingPage/Hero';
import Products from '../components/LandingPage/Products';

export default function Index() {
  return (
    <Box bgColor="#5A12A3">
      <Header />
      <Hero />
      <Products />
    </Box>
  );
}
