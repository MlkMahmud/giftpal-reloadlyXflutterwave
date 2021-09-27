import {
  Box, Grid, useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMediaQuery } from '../../utils';
import Header from './Header';
import DesktopMenu from './Menu/DesktopMenu';
import MobileMenu from './Menu/MobileMenu';

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_, setActiveItem] = useState('Dashboard');
  const isMobile = useMediaQuery('(max-width: 700px)');

  if (isMobile) {
    return (
      <Box>
        <Header
          handleClick={onOpen}
        />
        <MobileMenu
          isOpen={isOpen}
          handleClose={onClose}
          setActiveItem={(item) => setActiveItem(item)}
        />
      </Box>
    );
  }

  return (
    <Grid templateColumns="minmax(200px, 220px) 1fr">
      <DesktopMenu setActiveItem={(item) => setActiveItem(item)} />
      <Box />
    </Grid>
  );
}
