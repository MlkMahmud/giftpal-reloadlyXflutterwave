import React from 'react';
import {
  Box,
  Flex,
  Img,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function EmptyState() {
  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      py={2.5}
    >
      <Box
        maxW="200px"
        mb="20px"
      >
        <Img
          alt=""
          height="auto"
          maxW="100%"
          src="/empty.png"
        />
      </Box>
      <Stack align="center" spacing={5} textAlign="center">
        <Text
          fontSize="18px"
          fontWeight="bold"
          textTransform="uppercase"
        >
          No transactions found
        </Text>
        <Text
          color="#36454F"
          maxW="300px"
        >
          All transactions will appear here once created.
        </Text>
      </Stack>
      <Text
        color="#262626"
        fontSize="14px"
        mt="40px"
      >
        Illustration by
        {' '}
        <Link
          color="blue.500"
          href="https://icons8.com/illustrations/author/5dca95ef01d036001426e2bc"
          textDecor="underline"
        >
          Ivan Haidutsk
          {' '}
        </Link>
        from
        {' '}
        <Link
          color="blue.500"
          href="https://icons8.com/illustrations"
          textDecor="underline"
        >
          Ouch!
        </Link>
      </Text>
    </Flex>
  );
}
