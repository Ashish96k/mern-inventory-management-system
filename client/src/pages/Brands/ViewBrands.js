import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTags } from 'react-icons/fa';
import styled from 'styled-components';

const ViewBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <FaTags />
        </Icon>{' '}
        our brands
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
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Total Products</th>
              <th scope='col'>Added On</th>
              <th scope='col'>Official Website</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={brand._id}>
                <th scope='row'>{index + 1}</th>
                <td className='text-capitalize'>{brand.brandName}</td>
                <td>10</td>
                <td>{Date(brand.date).substring(4, 15)}</td>
                <td>{brand.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className='text-danger text-center text-capitalize mt-5'>
          please add some brands !
        </h2>
      )}
    </div>
  );
};

export default ViewBrands;

const Icon = styled.span`
  font-size: 40px;
`;
