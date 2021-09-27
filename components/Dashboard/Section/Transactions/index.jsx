import {
  Flex, Stack, Spinner, Text,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const EmptyState = dynamic(() => import('./EmptyState'));
// const ErrorState = dynamic(() => import('./ErrorState'));

export default function Transactions() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTransactions([]);
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
          <Text>Loading jobs...</Text>
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
    <Stack>
      <Text fontSize="18px" fontWeight="hairline">Transactions</Text>
    </Stack>
  );
}
