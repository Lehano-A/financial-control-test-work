import React, { useEffect, useState, MouseEvent } from 'react';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import {
  Collapse,
  List as MuiList,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import dataList from './data';
import NestedList from './NestedList/NestedList';
import { IsOpenState } from './ListMenu.types';

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
    backgroundColor: theme.palette.primary.light,
  }),
);

const ListItemIcon = styled(MuiListItemIcon)(() => ({
  minWidth: '0',
  marginRight: '10px',
}));

function ListMenu() {
  const [isOpen, setIsOpen] = useState<IsOpenState>({});

  useEffect(() => {
    dataList.forEach((item) => {
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
      {dataList.map((item, id) => {
        const { main, nested } = item;

        return (
          <React.Fragment key={id}>
            <ListItemButton
              id={id.toString()}
              onClick={handleOnClick}
            >
              <ListItemIcon>{main.icon}</ListItemIcon>
              <ListItemText primary={main.name} />
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
