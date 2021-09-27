import { Stack } from '@chakra-ui/react';
import React from 'react';
import Category from './Category';
import Transactions from '../Transactions';

const categories = [
  {
    title: 'Airtime',
    description: 'Topup your friends and family no matter where there are in the world.',
    buttonText: 'Buy Airtime',
  },
  {
    title: 'Mobile Data',
    description: 'Buy mobile data for your friends and family',
    buttonText: 'Buy Data',
  },
  {
    title: 'Bills',
    description: 'Pay Cable TV, Electricity and WiFi bills for your friends and family',
    buttonText: 'Pay Bills',
  },
];

export default function Home() {
  return (
    <>
      <Stack
        isInline
        overflowY="auto"
        spacing="5"
        padding="20px 10px 20px 5px"
      >
        {categories.map(({ buttonText, description, title }) => (

          <Category
            buttonText={buttonText}
            description={description}
            title={title}
            key={title}
          />
        ))}
      </Stack>
      <Transactions />
    </>
  );
}
