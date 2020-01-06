import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingIcon, setLoadingIcon] = useState(false);

  useEffect(() => {
    axios
      .get('/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        toast.warn('Something went wrong !!');
        setLoading(false);
      });
  }, [products]);

  const handleDelete = id => {
    setLoadingIcon(id);
    axios
      .delete(`/api/products/${id}`)
      .then(res => {
        toast.success('Product has been removed !!');
        setLoadingIcon(false);
      })
      .catch(err => {
        console.log(err);
        toast.warn('Something went wrong !!');
        setLoadingIcon(false);
      });
  };
  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <MdDelete />
        </Icon>{' '}
        Products
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
        <ul className='list-group text-capitalize'>
          {products.map(product => (
            <li
              key={product._id}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              {product.productName} - ${product.price}
              <button
                className='btn btn-danger btn-sm'
                onClick={() => handleDelete(product._id)}
              >
                {loadingIcon === product._id ? (
                  <span
                    className='spinner-grow spinner-grow-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>
                ) : (
                  <MdDelete />
                )}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className='text-danger text-center text-capitalize mt-5'>
          please add some products !
        </h2>
      )}
    </div>
  );
};

export default ManageProducts;

const Icon = styled.span`
  font-size: 40px;
`;
