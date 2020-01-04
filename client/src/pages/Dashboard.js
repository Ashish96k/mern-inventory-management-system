import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../components/Card/ItemCard';
import { ThemeData } from '../components/Card/config/ThemeData';

const Dashboard = () => {
  const { stores, users, brands, categories, products } = ThemeData;

  return (
    <Container>
      <Grid container direction='row' justify='flex-start' spacing={3}>
        <Grid item>
          <ItemCard
            themeData={stores}
            total='4'
            subheading='Stores'
            link='/stores'
          />
        </Grid>
        <Grid item>
          <ItemCard
            themeData={users}
            total='2'
            subheading='Users'
            link='/users/view'
          />
        </Grid>
        <Grid item>
          <ItemCard
            themeData={brands}
            total='5'
            subheading='Brands'
            link='/brands/view'
          />
        </Grid>
        <Grid item>
          <ItemCard
            themeData={categories}
            total='1'
            subheading='Categories'
            link='/categories/view'
          />
        </Grid>
        <Grid item>
          <ItemCard
            themeData={products}
            total='0'
            subheading='Products'
            link='/products/view'
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
