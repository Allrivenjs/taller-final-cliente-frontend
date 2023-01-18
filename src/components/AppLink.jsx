import { Link as RouterLink } from 'react-router-dom';

import { Link } from '@chakra-ui/react';

export const AppLink = ({ text = 'no text', to = '' }) => {
  return (
    <Link as={RouterLink} color={'blue.400'} to={to}>
      {text}
    </Link>
  );
};
