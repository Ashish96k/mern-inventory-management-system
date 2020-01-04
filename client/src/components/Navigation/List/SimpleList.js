import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const SimpleList = ({ name, icon }) => {
  return (
    <ListItem button>
      <ListItemIcon className='simple-list-icons'>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default SimpleList;
