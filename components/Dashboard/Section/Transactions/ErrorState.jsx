import React from 'react';
import {
  Box,
  Button,
  Flex,
  Img,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function ErrorState({ handleClick }) {
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
          src="/error.png"
        />
      </Box>
      <Stack align="center" spacing={5} textAlign="center">
        <Text
          fontSize="18px"
          fontWeight="bold"
          textTransform="uppercase"
        >
          Uh oh!
        </Text>
        <Text
          color="#36454F"
          maxW="300px"
        >
          We seem to have run into some trouble fetching your transactions.
          {' '}
          Would you like to give it another try?
        </Text>
        <Button
          borderRadius="20px"
          colorScheme="black"
          isFullWidth
          maxW="200px"
          onClick={handleClick}
        >
          Try Again
        </Button>
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
          href="https://icons8.com/illustrations/author/5dbbfa9e01d0360016457560"
          textDecor="underline"
        >
          Sara Maese
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

ErrorState.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
