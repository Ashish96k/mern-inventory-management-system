import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaShoppingBag } from 'react-icons/fa';
import styled from 'styled-components';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        toast.warn('Something went wrong !!');
        setLoading(false);
      });
  }, []);

  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <FaShoppingBag />
        </Icon>{' '}
        our products
      </h2>
      {loading ? (
        <div className='d-flex justify-content-center mt-5'>
          <div
            className='spinner-grow'
            style={{ width: '4rem', height: '4rem' }}
            role='status'
          >
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : products.length > 0 ? (
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Price</th>
              <th scope='col'>Brand</th>
              <th scope='col'>Category</th>
              <th scope='col'>Date Added</th>
              <th scope='col'>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className='text-capitalize'>
                <th scope='row'>{index + 1}</th>
                <td>{product.productName}</td>
                <td>$ {product.price}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{Date(product.date).substring(4, 15)}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className='text-danger text-center text-capitalize mt-5'>
          please add some products !!
        </h2>
      )}
    </div>
  );
};

export default ViewProducts;

const Icon = styled.span`
  font-size: 40px;
`;
