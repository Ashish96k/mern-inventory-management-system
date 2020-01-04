import React from 'react';
import { FaStoreAlt, FaTags, FaShoppingBag  } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdFolder } from 'react-icons/md';

export const ThemeData = {
  stores: {
    primaryColor: 'rgb(28, 228, 2)',
    secondaryColor: 'rgb(23, 184, 2)',
    icon: <FaStoreAlt />
  },
  users: {
    primaryColor: 'rgb(243, 227, 3)',
    secondaryColor: 'rgb(204, 191, 2)',
    icon: <FiUsers />
  },
  brands: {
    primaryColor: 'rgb(243, 90, 2)',
    secondaryColor: 'rgb(212, 78, 1)',
    icon: <FaTags />
  },
  categories: {
    primaryColor: 'rgb(102, 102, 102)',
    secondaryColor: 'rgb(75, 75, 75)',
    icon: <MdFolder />
  },
  products: {
    primaryColor: 'rgb(0, 139, 219)',
    secondaryColor: 'rgb(0, 114, 180)',
    icon: <FaShoppingBag  />
  }
};
