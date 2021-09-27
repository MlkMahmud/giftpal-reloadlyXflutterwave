import {
  Box,
  Flex,
  Stack,
  Spinner,
  Text,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const EmptyState = dynamic(() => import('./EmptyState'));
// const ErrorState = dynamic(() => import('./ErrorState'));

function Transaction({
  createdAt, productName, amount, isCredit,
}) {
  return (
    <Box maxWidth="800px" mb="20px">
      <Flex align="center" justify="space-between">
        <Text fontWeight="600">
          {productName}
        </Text>
        <Text fontSize="15px" color={isCredit ? 'green.500' : 'red'}>{amount}</Text>
      </Flex>
      <Text color="rgb(26, 32, 44)" fontSize="14.5" opacity="0.8">{createdAt}</Text>
    </Box>
  );
}

Transaction.propTypes = {
  createdAt: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  isCredit: PropTypes.bool.isRequired,
};

export default function Transactions() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTransactions([
        { amount: '1400', createdAt: new Date().toDateString(), productName: 'Spotify' },
        { amount: '2450', createdAt: new Date().toDateString(), productName: 'Netflix' },
        { amount: '5000', createdAt: new Date().toDateString(), productName: 'Amazon Web Services' },
      ]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  });

  if (isLoading) {
    return (
      <Flex
        align="center"
        height="100%"
        justify="center"
        width="100%"
      >
        <Stack align="center" spacing={2}>
          <Spinner size="xl" thickness="10px" />
          <Text>Loading transactions...</Text>
        </Stack>
      </Flex>
    );
  }

  if (transactions.length < 1) {
    return (
      <EmptyState />
    );
  }

  return (
    <Stack spacing={5}>
      <Text fontSize={['18px', '20px']} fontWeight="700">Recent Transactions</Text>
      <Box>
        {transactions.map(({ amount, createdAt, productName }) => (
          <Transaction
            amount={amount}
            createdAt={createdAt}
            productName={productName}
          />
        ))}
      </Box>
    </Stack>
  );
}
