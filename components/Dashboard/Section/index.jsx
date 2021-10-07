import { Box, Grid, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import Home from './Home';

const sections = {
  home: Home,
};

export default function Section({ activeSection, isFullWidth }) {
  const ActiveSection = sections[activeSection];
  return (
    <Grid
      p={['0 0.5rem 1.25rem calc(0.5rem + 5px)', '0 1.5rem 2.5rem calc(1.5rem + 5px)']}
      minH={isFullWidth ? 'calc(100vh - 80px)' : '100vh'}
      marginLeft={isFullWidth ? '0' : '200px'}
      templateRows="auto auto 1fr"
    >
      <Box py="5">
        <Text
          fontSize={['22px', '24px']}
          fontWeight="extrabold"
        >
          Welcome back
        </Text>
      </Box>
      <ActiveSection />
    </Grid>
  );
}

Section.propTypes = {
  activeSection: PropTypes.string.isRequired,
  isFullWidth: PropTypes.bool,
};

Section.defaultProps = {
  isFullWidth: true,
};
