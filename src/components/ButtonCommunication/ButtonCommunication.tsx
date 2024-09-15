import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';

const Button = styled(MuiButton)(({ theme }) => ({
  width: '100%',
  height: '65px',
  fontSize: '15px',
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  textTransform: 'none',
  borderRadius: theme.customVariables.borderRadiusMain,
}));

function ButtonCommunication() {
  return <Button startIcon={<SmsRoundedIcon />}>Связаться с нами</Button>;
}

export default ButtonCommunication;
