import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  MdDashboard,
  MdPersonAdd,
  MdDelete,
  MdSearch,
  MdFolder,
  MdAdd
} from 'react-icons/md';
import { FaUsers, FaStoreAlt, FaTags, FaShoppingBag } from 'react-icons/fa';
import SimpleList from './List/SimpleList';
import NestedList from './List/NestedList';

import App from '../../App';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const SideDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: '#181A1B' }}
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            <Link to='/'>Inventory Management System</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='/dashboard'>
            <SimpleList name={'Dashboard'} icon={<MdDashboard />} />
          </Link>
          <Link to='/stores'>
            <SimpleList name={'Stores'} icon={<FaStoreAlt />} />
          </Link>
        </List>
        <Divider />
        <List>
          <NestedList
            parent={{ name: 'Users', icon: <FaUsers /> }}
            child={[
              { name: 'View All Users', icon: <MdSearch />, link: '/users/view' },
              { name: 'Add Users', icon: <MdPersonAdd />, link: '/users/add' },
              { name: 'Manage Users', icon: <MdDelete />, link: '/users/manage' }
            ]}
          />
          <NestedList
            parent={{ name: 'Brands', icon: <FaTags /> }}
            child={[
              { name: 'View All Brands', icon: <MdSearch />, link: '/brands/view' },
              { name: 'Add Brands', icon: <MdAdd />, link: '/brands/add' },
              { name: 'Manage Brands', icon: <MdDelete />, link: '/brands/manage' }
            ]}
          />
          <NestedList
            parent={{ name: 'Categories', icon: <MdFolder /> }}
            child={[
              { name: 'View All', icon: <MdSearch />, link: '/categories/view' },
              { name: 'Add', icon: <MdAdd />, link: '/categories/add' },
              { name: 'Manage', icon: <MdDelete />, link: '/categories/manage' }
            ]}
          />
          <NestedList
            parent={{ name: 'Products', icon: <FaShoppingBag /> }}
            child={[
              { name: 'View All Products', icon: <MdSearch />, link: '/products/view' },
              { name: 'Add Products', icon: <MdAdd />, link: '/products/add' },
              { name: 'Manage Products', icon: <MdDelete />, link: '/products/manage' }
            ]}
          />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <App />
      </main>
    </div>
  );
};

export default SideDrawer;
