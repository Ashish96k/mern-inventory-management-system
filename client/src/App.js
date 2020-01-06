import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Stores';
import ViewUsers from './pages/Users/ViewUsers';
import UserForm from './pages/Users/UserForm';
import ManageUsers from './pages/Users/ManageUsers';
import ViewBrands from './pages/Brands/ViewBrands';
import BrandForm from './pages/Brands/BrandForm';
import ManageBrands from './pages/Brands/ManageBrands';
import ViewCategories from './pages/categories/ViewCategories';
import CategoryFrom from './pages/categories/CategoryFrom';
import ManageCategories from './pages/categories/ManageCategories';
import ViewProducts from './pages/Products/ViewProducts';
import ProductsForm from './pages/Products/ProductsForm';
import ManageProducts from './pages/Products/ManageProducts';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/stores' component={Stores} />
        <Route path='/users/view' component={ViewUsers} />
        <Route path='/users/add' component={UserForm} />
        <Route path='/users/manage' component={ManageUsers} />
        <Route path='/brands/view' component={ViewBrands} />
        <Route path='/brands/add' component={BrandForm} />
        <Route path='/brands/manage' component={ManageBrands} />
        <Route path='/categories/view' component={ViewCategories} />
        <Route path='/categories/add' component={CategoryFrom} />
        <Route path='/categories/manage' component={ManageCategories} />
        <Route path='/products/view' component={ViewProducts} />
        <Route path='/products/add' component={ProductsForm} />
        <Route path='/products/manage' component={ManageProducts} />
      </Switch>
    </>
  );
};

export default App;
