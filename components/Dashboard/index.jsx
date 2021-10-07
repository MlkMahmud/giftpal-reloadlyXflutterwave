import {
  Box, useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMediaQuery } from '../../utils';
import Header from './Header';
import DesktopMenu from './Menu/DesktopMenu';
import MobileMenu from './Menu/MobileMenu';
import Section from './Section';

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeItem, setActiveItem] = useState('home');
  const isMobile = useMediaQuery('(max-width: 800px)');

  if (isMobile) {
    return (
      <Box>
        <Header
          handleClick={onOpen}
        />
        <Section activeSection={activeItem} />
        <MobileMenu
          isOpen={isOpen}
          handleClose={onClose}
          setActiveItem={(item) => setActiveItem(item)}
        />
      </Box>
    );
  }

  return (
    <Box>
      <DesktopMenu setActiveItem={(item) => setActiveItem(item)} />
      <Section activeSection={activeItem} isFullWidth={isMobile} />
    </Box>
  );
}
