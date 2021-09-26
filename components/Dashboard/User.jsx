import {
  Avatar, Box, Stack, Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function User({ name, username }) {
  return (
    <Stack
      isInline
      spacing={2}
    >
      <Avatar
        bgColor="#000"
        borderRadius="10px"
        color="white"
        name={name}
      />
      <Box>
        <Text color="black" fontWeight="extrabold">
          @
          {username}
        </Text>
        <Text color="#2C3539" fontSize="14px" fontWeight="700">{name}</Text>
      </Box>
    </Stack>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
