/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import { AtSignIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email().required('Please provide a valid email address'),
  password: Yup.string()
    .min(14, 'password must be at least 14 characters long')
    .max(30, 'password must not be longer than 30 characters')
    .required('Please provide a password'),
  username: Yup.string().min(2).max(15).required('Please proviide a valid username'),
  name: Yup.string().max(35).required('Please provide a valid name'),
});

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const id = 'toastId';

  const displayToast = (description) => {
    if (!toast.isActive(id)) {
      toast({
        id,
        title: 'Authentication error',
        isClosable: true,
        duration: 5000,
        status: 'error',
        description,
      });
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
        name: '',
      }}
      onSubmit={async (values) => {
        try {
          setIsLoading(true);
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          });
          if (response.ok) {
            router.push('/dashboard');
          } else if (response.status < 500) {
            const { message } = await response.json();
            setIsLoading(false);
            displayToast(message);
          } else {
            throw new Error(response.statusText);
          }
        } catch (e) {
          setIsLoading(false);
          displayToast('Something went wrong. Please try again.');
        }
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing={8}>
            <Box>
              <Field name="name">
                {({ field, meta }) => (
                  <FormControl isInvalid={meta.error && meta.touched} isRequired>
                    <FormLabel htmlFor="name">Name:</FormLabel>
                    <Input id="name" type="text" {...field} />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
            <Box>
              <Field name="username">
                {({ field, meta }) => (
                  <FormControl isInvalid={meta.error && meta.touched} isRequired>
                    <FormLabel htmlFor="username">Username:</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <AtSignIcon color="gray.300" />
                      </InputLeftElement>
                      <Input id="username" type="text" {...field} />
                    </InputGroup>
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
            <Box>
              <Field name="email">
                {({ field, meta }) => (
                  <FormControl isInvalid={meta.error && meta.touched} isRequired>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <Input id="email" type="email" {...field} />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
            <Box>
              <Field name="password">
                {({ field, meta }) => (
                  <FormControl isInvalid={meta.error && meta.touched} isRequired>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <Input autoComplete="new-password" id="password" type="password" {...field} />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
            <Button
              type="submit"
              colorScheme="purple"
              isDisabled={isSubmitting}
              isLoading={isLoading}
            >
              Sign Up
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
