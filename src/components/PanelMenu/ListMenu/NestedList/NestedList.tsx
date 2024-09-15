import React from 'react';
import { styled } from '@mui/material/styles';
import {
  ListItemButton as MuiListItemButton,
  ListItemText,
} from '@mui/material';
import { NestedListProps } from './NestedList.types';

const ListItemButton = styled(MuiListItemButton)(() => ({
  paddingLeft: '48px',
  fontSize: '12px',
}));

function NestedList({ nestedData }: { nestedData: NestedListProps[] }) {
  return (
    <>
      {nestedData.map((item, id) => {
        const { name } = item;

        return (
          <ListItemButton key={id}>
            <ListItemText
              primary={name}
              primaryTypographyProps={{ fontSize: '15px' }}
            />
          </ListItemButton>
        );
      })}
    </>
  );
}

export default NestedList;
