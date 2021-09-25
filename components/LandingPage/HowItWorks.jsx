import {
  Box, Link, Stack, Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { useMediaQuery } from '../../utils';

function Card({ index, bgColor, children }) {
  return (
    <Stack
      bgColor={bgColor}
      borderRadius="10px"
      maxWidth="600px"
      padding="15px"
      shadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"
      width="100%"
    >
      <Text
        fontSize="24px"
        fontWeight="bold"
      >
        0
        {index}
      </Text>
      <Text
        fontSize="18px"
        fontWeight="hairline"
      >
        {children}
      </Text>
    </Stack>
  );
}

Card.propTypes = {
  index: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function HowItWorks() {
  const isMobile = useMediaQuery('(max-width: 800px)');
  return (
    <>
      <Stack color="white" mt="40px" spacing={5} px={['2', '10']} py="10">
        <Text
          fontSize="32px"
          textAlign="center"
          textTransform="uppercase"
        >
          How it works
        </Text>
        <Stack
          align={isMobile ? 'center' : ''}
          isInline={!isMobile}
          justifyContent="space-between"
          spacing={5}
        >
          <Card
            bgColor="#9F19F1"
            key="1"
            index="1"
          >
            Create an account
          </Card>
          <Card
            bgColor="#2FD7AE"
            key="2"
            index="2"
          >
            Browse & select desired gift from gift category
          </Card>
          <Card
            bgColor="#E35A20"
            key="3"
            index="3"
          >
            Add reciepient details and a little surprise note
          </Card>
          <Card
            bgColor="#9F19F1"
            key="4"
            index="4"
          >
            Make paymentss through multiple payment options
          </Card>
          <Card
            bgColor="#E72CF8"
            key="5"
            index="5"
          >
            Gift confirmation code shared with the giftee to redeem
          </Card>
        </Stack>
        <Box textAlign="center" margin="40px 0 0 0 !important">
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
              Get Started
            </Link>
          </NextLink>
        </Box>
      </Stack>
    </>
  );
}
