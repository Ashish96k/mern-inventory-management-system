import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../components/Card/ItemCard';
import { ThemeData } from '../components/Card/config/ThemeData';

const Dashboard = () => {
  const { stores, users, brands, categories, products } = ThemeData;

  const [totalStores, setTotalStores] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBrands, setTotalBrands] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loadingStores, setLoadingStores] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingBrands, setLoadingBrands] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    // Get Stores
    axios
      .get('/api/stores')
      .then(res => {
        setTotalStores(res.data.length);
        setLoadingStores(false);
      })
      .catch(err => {
        console.log(err);
        toast.warn('Something went wrong with Stores Data !!');
        setLoadingStores(false);
      });
    // Get Users
    axios
      .get('/api/users')
      .then(res => {
        setTotalUsers(res.data.length);
        setLoadingUsers(false);
      })
      .catch(err => {
        console.log(err);
        toast.warn('Something went wrong with Users Data !!');
        setLoadingUsers(false);
      });
    // Get Brands
    axios
      .get('/api/brands')
      .then(res => {
        setTotalBrands(res.data.length);
        setLoadingBrands(false);
      })
      .catch(err => {
        console.log(err);
        toast.warn('Something went wrong with Brands Data !!');
        setLoadingBrands(false);
      });
    // Get Categories
    axios
      .get('/api/categories')
      .then(res => {
        setTotalCategories(res.data.length);
        setLoadingCategories(false);
      })
      .catch(err => {
        console.log(err);
        toast.warn('Something went wrong with Categories Data !!');
        setLoadingCategories(false);
      });
    // Get Products
    axios
      .get('/api/products')
      .then(res => {
        setTotalProducts(res.data.length);
        setLoadingProducts(false);
      })
      .catch(err => {
        console.log(err);
        toast.warn('Something went wrong with Products Data !!');
        setLoadingProducts(false);
      });
  }, []);

  return (
    <Container>
      <Grid container direction='row' justify='flex-start' spacing={3}>
        <Grid item>
          <ItemCard
            themeData={stores}
            total={totalStores}
            loading={loadingStores}
            subheading='Stores'
            link='/stores'
          />
        </Grid>
        <Grid item>
          <ItemCard
            themeData={users}
            total={totalUsers}
            loading={loadingUsers}
            subheading='Users'
            link='/users/view'
          />
        </Grid>
        <Grid item>
          <ItemCard
            themeData={brands}
            total={totalBrands}
            loading={loadingBrands}
            subheading='Brands'
            link='/brands/view'
          />
        </Grid>
        <Grid item>
          <ItemCard
            themeData={categories}
            total={totalCategories}
            loading={loadingCategories}
            subheading='Categories'
            link='/categories/view'
          />
        </Grid>
        <Grid item>
          <ItemCard
            themeData={products}
            total={totalProducts}
            loading={loadingProducts}
            subheading='Products'
            link='/products/view'
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
