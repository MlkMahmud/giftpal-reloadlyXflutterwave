/* eslint-disable react/no-unescaped-entities */
import {
  Flex, Link, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import SignUpForm from './SignUpForm';

export default function Login() {
  return (
    <Flex
      justifyContent="center"
      mt="10vh"
      minH="90vh"
      padding="10px"
    >
      <Stack width="100%" maxWidth="500px" spacing={5}>
        <Text fontSize="24px" fontWeight="extrabold">Let's get you started!</Text>
        <SignUpForm />
        <Text>
          Already a member?
          {' '}
          <NextLink href="/login">
            <Link
              color="blue.500"
              href="/login"
              textDecor="underline"
            >
              Login
            </Link>
          </NextLink>
        </Text>
      </Stack>
    </Flex>
  );
}
