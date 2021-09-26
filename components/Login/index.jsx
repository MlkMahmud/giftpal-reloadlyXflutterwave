import {
  Flex, Link, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <Flex
      justifyContent="center"
      mt="10vh"
      minH="90vh"
      padding="10px"
    >
      <Stack width="100%" maxWidth="500px" spacing={5}>
        <Text fontSize="24px" fontWeight="extrabold">Glad to have you back!!</Text>
        <LoginForm />
        <Text>
          Not a member yet?
          {' '}
          <NextLink href="/signup">
            <Link
              color="blue.500"
              href="/login"
              textDecor="underline"
            >
              Sign Up
            </Link>
          </NextLink>
        </Text>
      </Stack>
    </Flex>
  );
}
