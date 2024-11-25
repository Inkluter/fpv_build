import { FormContainer } from 'react-hook-form-mui';

import { DroneForm } from './DroneForm';

export const DroneFormWrapper = () => {
  const defaultValues = {
    name: '',
    rx: '',
    rx_2: '',
    vtx: '',
    vtx_2: '',
    frame: '',
    dualRx: false,
    dualVtx: false,
  };

  return (
    <FormContainer
      defaultValues={defaultValues}
      onSuccess={(data) => console.log(data)}
    >
      <DroneForm />
    </FormContainer>
  );
};
