import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import MenuList from './MenuList';
import LogoutButton from '../LogoutButton';

export default function MobileMenu({
  isOpen,
  handleClose,
  setActiveItem,
}) {
  const handleClick = (item) => {
    setActiveItem(item);
    handleClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={handleClose}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader mb="20px" />
        <DrawerBody>
          <Stack
            align="start"
            color="#000"
            spacing="10"
            pos="relative"
            height="100%"
          >
            <MenuList setActiveItem={(item) => handleClick(item)} />
            <LogoutButton />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};
