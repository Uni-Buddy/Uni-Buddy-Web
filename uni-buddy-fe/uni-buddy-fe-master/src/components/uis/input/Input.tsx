import { TextField } from '@mui/material';
import { Controller, Control, FieldError } from 'react-hook-form';

export interface InputProps {
  control: Control<any>;
  name: string;
  variant?: 'filled' | 'outlined' | 'standard';
  sx?: any;
  error: FieldError | undefined;
  label?: string;
  type?: string;
  size?: 'small' | 'medium';
}

const Input = ({
  control,
  name,
  sx = {},
  error,
  variant = 'standard',
  label = '',
  type = 'text',
  size = 'medium',
}: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <TextField
            value={field.value || ''}
            onChange={field.onChange}
            type={type}
            label={label}
            size={size}
            error={!!error}
            helperText={error ? error?.message : ''}
            InputLabelProps={{ shrink: !!field.value }}
            variant={variant}
            sx={sx}
          />
        );
      }}
    />
  );
};

export default Input;
