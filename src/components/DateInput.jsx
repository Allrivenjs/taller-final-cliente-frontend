import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const DateInput = ({ label, onChange, placeholder, type = 'datetime-local' }) => {
  const onChangeInput = (e) => {
    onChange(new Date(e.target.value).toISOString());
  };
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        size='md'
        type={type}
        onChange={onChangeInput}
      />
    </FormControl>
  );
};
