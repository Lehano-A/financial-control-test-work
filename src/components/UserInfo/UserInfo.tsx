import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button, Chip as MuiChip, styled } from '@mui/material';

const Section = styled('section')(({ theme }) => ({
  minWidth: '735px',
  minHeight: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.common.white,
  padding: '0px 15px 0px 15px',
  fontWeight: 500,
}));

const BoxUserDetails = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',

  '& > :nth-of-type(1n):not(:last-child)': {
    marginRight: '18px',
  },
}));

const ChipMixin = styled(MuiChip)(() => ({
  fontSize: '1.4rem',
  letterSpacing: '0.6px',
}));

const Profile = styled(ChipMixin)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: 'none',

  '& > .MuiChip-icon': {
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
  },

  '&:hover': {
    backgroundColor: theme.palette.primary.shades[300],
  },
}));

const Plan = styled(ChipMixin)(({ theme }) => ({
  height: '50px',
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.light,
  padding: '0 5px 0 10px',

  '& > .MuiChip-icon': {
    fontSize: '2rem',
    color: theme.palette.secondary.main,
    marginRight: '-3px',
  },
}));

const BoxUserActions = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',

  '& > :nth-of-type(1n):not(:last-child)': {
    marginRight: '5px',
  },
}));

const ButtonLogout = styled(Button)(({ theme }) => ({
  fontSize: '1.3rem',
  borderRadius: '40px',
  padding: '3px',
  color: theme.palette.primary.main,
}));

const ButtonAbout = styled(Button)(({ theme }) => ({
  fontSize: '1.3rem',
  borderRadius: '40px',
  backgroundColor: theme.palette.accent.main,
  padding: '3px',
  fontWeight: 400,

  '& > svg': {
    marginLeft: '1px',
  },
}));

function UserInfo() {
  return (
    <Section>
      <BoxUserDetails>
        <Profile
          icon={<AccountCircleIcon />}
          label='Иванов И.И'
          clickable
        />

        <Plan
          icon={<CalendarMonthIcon />}
          label='Тариф до 15.04.2024'
        />
      </BoxUserDetails>

      <BoxUserActions>
        <ButtonLogout variant='outlined'>Выйти</ButtonLogout>
        <ButtonAbout variant='contained'>
          О нас <ArrowForwardIcon />
        </ButtonAbout>
      </BoxUserActions>
    </Section>
  );
}

export default UserInfo;
