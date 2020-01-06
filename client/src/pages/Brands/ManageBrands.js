import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const ManageBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingIcon, setLoadingIcon] = useState(false);

  useEffect(() => {
    axios
      .get('/api/brands')
      .then(res => {
        setBrands(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [brands]);

  const handleDelete = id => {
    setLoadingIcon(id);
    axios
      .delete(`/api/brands/${id}`)
      .then(res => {
        toast.success('Brand has been removed !!');
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
        Brands
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
      ) : brands.length > 0 ? (
        <ul className='list-group'>
          {brands.map(brand => (
            <li
              key={brand._id}
              className='list-group-item d-flex justify-content-between align-items-center text-capitalize'
            >
              {brand.brandName}
              <button
                className='btn btn-danger btn-sm'
                onClick={() => handleDelete(brand._id)}
              >
                {loadingIcon === brand._id ? (
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
          please add some brands !
        </h2>
      )}
    </div>
  );
};

export default ManageBrands;

const Icon = styled.span`
  font-size: 40px;
`;
