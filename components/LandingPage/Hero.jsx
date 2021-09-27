/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Flex, Image, Link, Stack, Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Hero() {
  return (
    <Flex
      direction={['column', 'row']}
      justify={['center', null]}
      minHeight="calc(100vh - 80px)"
      px={['2', '10']}
    >
      <Flex align={[null, 'center']} mb={['20px', null]} width={['100%', '50%']}>
        <Stack spacing={5}>
          <Text
            color="#FFF"
            fontSize={['xl', '2xl']}
            fontWeight="bold"
          >
            Giving shouldn't be occasional.
            <br />
            Make everyday an occasion
          </Text>
          <Text
            color="#FAF6FE"
            fontSize={['lg', 'xl']}
            fontWeight="hairline"
          >
            Put a smile on someone's face today. Giving made easy and fun, anytime any day
          </Text>
          <NextLink href="/signup">
            <Link
              aria-label="sign up"
              bgColor="#DF932F"
              borderRadius="10px"
              color="white"
              fontWeight="extrabold"
              href="/signup"
              p="16px 38px"
              width="fit-content"
            >
              Get Gifting
            </Link>
          </NextLink>
        </Stack>
      </Flex>
      <Flex align={[null, 'center']} width={['100%', '50%']}>
        <Image
          alt=""
          maxWidth="100%"
          src="/gift.png"
        />
      </Flex>
    </Flex>
  );
}
