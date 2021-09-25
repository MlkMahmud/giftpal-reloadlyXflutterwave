import React from 'react';
import {
  Icon, Stack, Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../../utils';
import { AirtimeIcon, BillIcon, GiftCardIcon } from '../icons';

function ProductCard({ icon, title, children }) {
  return (
    <Stack spacing={4} maxWidth="600px" width="100%">
      <Icon as={icon} boxSize="50px" />
      <Text
        fontSize="20px"
        fontWeight="extrabold"
      >
        {title}
      </Text>
      <Text fontWeight="hairline" fontSize="18px">
        {children}
      </Text>
    </Stack>
  );
}

ProductCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Products() {
  const isMobile = useMediaQuery('(max-width: 700px)');
  return (
    <Stack color="white" spacing={10} px={['2', '10']} py={['5']}>
      <Text
        fontSize="32px"
        textAlign="center"
        textTransform="uppercase"
      >
        our products
      </Text>
      <Stack
        align="center"
        isInline={!isMobile}
        justifyContent="space-between"
        spacing="5"
      >
        <ProductCard
          icon={AirtimeIcon}
          key="airtime"
          title="Airtime"
        >
          In just a few easy clicks, you can buy airtime for your friends and family,
          regardless of where they are located in the world.
        </ProductCard>
        <ProductCard icon={BillIcon} key="bills" title="Bills">
          Help a friend out with some of those pesky
          internet, cable, mobile data and electricity bills.
        </ProductCard>
        <ProductCard icon={GiftCardIcon} key="giftcards" title="Giftcards">
          Surprise your loved ones with a wide range of giftcards from top brands like
          Amazon, Nike, Playstation and much more.
        </ProductCard>
      </Stack>
      <hr
        style={{
          margin: '2.5rem auto 0 auto',
          width: '150px',
        }}
      />
    </Stack>
  );
}
