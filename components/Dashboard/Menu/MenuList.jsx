/* eslint-disable react/jsx-props-no-spreading */
import {
  Button, Icon, Stack, Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { AiFillHome, AiFillSetting, AiOutlineTransaction } from 'react-icons/ai';
import { MdCardGiftcard } from 'react-icons/md';

const menuItems = [
  { title: 'Dashboard', icon: AiFillHome },
  { title: 'Giftcards', icon: MdCardGiftcard },
  { title: 'Transactions', icon: AiOutlineTransaction },
  { title: 'Settings', icon: AiFillSetting },
];

export function MenuItem({
  icon,
  isLoading,
  title,
  handleClick,
  ...rest
}) {
  return (
    <Button
      isLoading={isLoading}
      variant="unstyled"
      onClick={handleClick}
      {...rest}
    >
      <Stack align="center" isInline spacing="2">
        <Icon as={icon} boxSize="25px" />
        <Text fontSize="20px">{title}</Text>
      </Stack>
    </Button>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function MenuList({ setActiveItem }) {
  return (
    <Stack spacing={['3', '4']}>
      {menuItems.map(({ title, icon }) => (
        <MenuItem
          icon={icon}
          key={title}
          title={title}
          handleClick={() => {
            setActiveItem(title);
          }}
        />
      ))}
    </Stack>
  );
}

MenuList.propTypes = {
  setActiveItem: PropTypes.func.isRequired,
};
