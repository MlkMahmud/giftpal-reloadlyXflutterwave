import { Button, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function Category({
  buttonText,
  description,
  handleClick,
  title,
}) {
  return (
    <Stack
      bgColor="#FFF"
      spacing={5}
      justify="space-between"
      padding="20px"
      minWidth="min(300px, 100%)"
      maxWidth="400px"
      borderRadius="0.8rem"
      shadow="0 4px 8px 0 rgb(131 137 160 / 20%)"
    >
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Button
        colorScheme="black"
        onClick={handleClick}
        type="button"
        width="fit-content"
      >
        {buttonText}
      </Button>
    </Stack>
  );
}

Category.propTypes = {
  buttonText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
