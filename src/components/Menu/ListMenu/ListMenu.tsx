import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  List as MuiList,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import React, { MouseEvent, useEffect, useState } from 'react';

import NestedList from './NestedList/NestedList';
import dataListMenu from './dataListMenu';
import { IsOpenState } from './types/ListMenu.types';

const List = styled(MuiList)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  color: '#fff',
  padding: '0',
  margin: '0',
  '& svg': {
    fill: '#fff',
    width: '15px',
  },
}));

const ListItemButton = styled(MuiListItemButton)(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.shades[800],
  }),
);

const ListItemIcon = styled(MuiListItemIcon)(() => ({
  minWidth: '0',
  marginRight: '10px',
}));

function ListMenu() {
  const [isOpen, setIsOpen] = useState<IsOpenState>({});

  useEffect(() => {
    dataListMenu.forEach((item) => {
      const { main } = item;
      setIsOpen((prevState) => {
        return { ...prevState, [main.name]: false };
      });
    });
  }, []);

  function handleOnClick(e: MouseEvent) {
    const name = e.currentTarget.textContent;

    if (typeof name === 'string') {
      setIsOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
    }
  }

  return (
    <List>
      {dataListMenu.map((item, id) => {
        const { main, nested } = item;

        return (
          <React.Fragment key={id}>
            <ListItemButton
              id={id.toString()}
              onClick={handleOnClick}
            >
              <ListItemIcon>{main.icon}</ListItemIcon>
              <ListItemText
                primary={main.name}
                primaryTypographyProps={{ fontSize: '1.6rem' }}
              />
              {isOpen[main.name] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={isOpen[main.name]}
              timeout='auto'
              unmountOnExit
            >
              <List>
                <NestedList nestedData={nested} />
              </List>
            </Collapse>
          </React.Fragment>
        );
      })}
    </List>
  );
}

export default ListMenu;
