import React from 'react';
import { styled } from '@mui/material/styles';
import { List as MuiList, ListItem as MuiListItem } from '@mui/material';
import { widgetMixin } from '../../mixins/widgetMixin';

const Section = styled('section')(({ theme }) => ({
  ...widgetMixin(theme),
  padding: '20px',
}));

const BoxKeyValue = styled('div')(({ theme }) => ({
  display: 'inline-block',

  '&:nth-child(1)': {
    margin: ' 0 30px 15px 0',
  },
}));

const Title = styled('h2')(() => ({
  fontWeight: 400,
  fontSize: '1.2rem',
  marginBottom: '23px',
  letterSpacing: '0.1px',
}));

const Key = styled('dt')(({ theme }) => ({
  fontSize: '0.9rem',
  lineHeight: 1.7,
  color: theme.palette.primary.shades[600],
  letterSpacing: '0.1px',
}));

const Value = styled('dd')(() => ({
  fontSize: '1.2rem',
  whiteSpace: 'pre',
  letterSpacing: '0.1px',
}));

const List = styled(MuiList)(() => ({
  paddingBottom: '0',
}));

const ListItem = styled(MuiListItem)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '6px 0',

  '&:nth-child(1n):not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.primary.shades[600]}`,
  },

  '&:last-child': {
    paddingBottom: 0,
  },
}));

const Link = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.shades[600],
  fontSize: '1rem',
  letterSpacing: '0.4px',
}));

function TechnicalSupport() {
  return (
    <Section>
      <Title>Техническая поддержка</Title>
      <dl>
        <BoxKeyValue>
          <Key>Номер поддеркжи:</Key>
          <Value>8 (999) 999 99 99</Value>
        </BoxKeyValue>
        <BoxKeyValue>
          <Key>Почта поддержки:</Key>
          <Value>pf1@werthesest.ru</Value>
        </BoxKeyValue>
        <BoxKeyValue>
          <Key>Часы работы:</Key>
          <Value>{`Пн - Пт   с 9:00 до 19:00 мск`}</Value>
        </BoxKeyValue>
      </dl>

      <List>
        <ListItem>
          <Link href='#'>Пользовательское соглашение</Link>
        </ListItem>
        <ListItem>
          <Link href='#'>Политика конфиденциальности</Link>
        </ListItem>
        <ListItem>
          <Link href='#'>Юридическая информация</Link>
        </ListItem>
        <ListItem>
          <Link href='#'>Публичная оферта</Link>
        </ListItem>
      </List>
    </Section>
  );
}

export default TechnicalSupport;
