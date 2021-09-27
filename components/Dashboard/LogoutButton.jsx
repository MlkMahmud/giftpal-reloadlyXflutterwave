import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { MenuItem } from './Menu/MenuList';

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const id = 'toastId';

  const handleClick = async () => {
    try {
      setIsLoading(true);
      // eslint-disable-next-line no-undef
      const response = await fetch('/api/logout', {
        method: 'POST',
      });
      if (response.ok) {
        router.push('/login');
      } else {
        throw new Error(response.statusText);
      }
    } catch (e) {
      setIsLoading(false);
      if (!toast.isActive(id)) {
        toast({
          id,
          title: 'Uh Oh!',
          isClosable: true,
          duration: 5000,
          status: 'error',
          description: 'Something went wrong',
        });
      }
    }
  };

  return (
    <MenuItem
      position="absolute"
      bottom="20px"
      isLoading={isLoading}
      icon={AiOutlineLogout}
      title="Logout"
      handleClick={handleClick}
    />
  );
}
