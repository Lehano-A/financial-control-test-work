import {
  ListItemButton as MuiListItemButton,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { NestedListProps } from './types/NestedList.types';

const ListItemButton = styled(MuiListItemButton)(() => ({
  paddingLeft: '48px',
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
              primaryTypographyProps={{ fontSize: '1.5rem' }}
            />
          </ListItemButton>
        );
      })}
    </>
  );
}

export default NestedList;
