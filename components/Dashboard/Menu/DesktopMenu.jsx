import { Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import MenuList from './MenuList';
import LogoutButton from '../LogoutButton';

export default function DesktopMenu({ setActiveItem }) {
  return (
    <Stack
      bgColor="#5A12A3"
      color="#fff"
      minHeight="100vh"
      pos="relative"
      px={['2', '10']}
      py="5"
      spacing="12"
    >
      <a href="/" aria-label="homepage">
        <svg
          width="101"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 10.1S20.286-2.286 10.643 1.843C1 5.97 23.5 10.1 23.5 10.1Zm0 0s3.214-12.386 12.857-8.257C46 5.97 23.5 10.1 23.5 10.1Zm0 0V39 10.1ZM4.214 16.98V39h38.572V16.98H4.214ZM1 10.1v6.88h45V10.1H1Z"
            stroke="#F8F6FD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M59.536 13.8c3.216 0 5.736.768 7.56 2.304 1.824 1.536 2.736 3.648 2.736 6.336s-.912 4.8-2.736 6.336c-1.824 1.512-4.344 2.268-7.56 2.268h-6.768V39h-2.664V13.8h9.432Zm-.072 14.904c2.496 0 4.404-.54 5.724-1.62 1.32-1.104 1.98-2.652 1.98-4.644 0-2.04-.66-3.6-1.98-4.68-1.32-1.104-3.228-1.656-5.724-1.656h-6.696v12.6h6.696Zm22.757-8.784c2.471 0 4.367.624 5.688 1.872 1.32 1.224 1.98 3.048 1.98 5.472V39H87.44v-2.952c-.576.984-1.428 1.752-2.556 2.304-1.105.552-2.425.828-3.96.828-2.112 0-3.793-.504-5.04-1.512-1.249-1.008-1.873-2.34-1.873-3.996 0-1.608.576-2.904 1.728-3.888 1.177-.984 3.037-1.476 5.58-1.476h6.013v-1.152c0-1.632-.457-2.868-1.368-3.708-.913-.864-2.245-1.296-3.996-1.296a9.89 9.89 0 0 0-3.456.612c-1.105.384-2.053.924-2.845 1.62l-1.152-1.908c.96-.816 2.112-1.44 3.456-1.872a13.131 13.131 0 0 1 4.249-.684Zm-.9 17.244c1.44 0 2.675-.324 3.707-.972 1.032-.672 1.8-1.632 2.304-2.88v-3.096h-5.94c-3.24 0-4.86 1.128-4.86 3.384 0 1.104.42 1.98 1.26 2.628.84.624 2.016.936 3.528.936Zm16.23-24.876h2.556V39h-2.556V12.288Z"
            fill="#fff"
          />
        </svg>
      </a>
      <MenuList setActiveItem={(value) => setActiveItem(value)} />
      <LogoutButton />
    </Stack>
  );
}

DesktopMenu.propTypes = {
  setActiveItem: PropTypes.func.isRequired,
};
