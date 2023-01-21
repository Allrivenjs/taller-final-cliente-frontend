import { Spinner, Stack } from '@chakra-ui/react';

export const SpinnerPage = () => {
  return (
    <Stack
      width='100vw'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Spinner size='xl'/>
    </Stack>
  );
};
