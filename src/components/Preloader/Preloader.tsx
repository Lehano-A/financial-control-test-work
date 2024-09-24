import { CircularProgress, styled } from '@mui/material';

const LoadingIndicator = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.accent.main,
}));

function Preloader() {
  return <LoadingIndicator />;
}

export default Preloader;
