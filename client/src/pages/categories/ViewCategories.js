import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdFolder } from 'react-icons/md';
import styled from 'styled-components';

const ViewCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/categories')
      .then(res => {
        setCategories(res.data);
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
          <MdFolder />
        </Icon>{' '}
        our categories
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
      ) : categories.length > 0 ? (
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Category Name</th>
              <th scope='col'>Total Products</th>
              <th scope='col'>Added On</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id}>
                <th scope='row'>{index + 1}</th>
                <td className='text-capitalize'>{category.categoryName}</td>
                <td>10</td>
                <td>{Date(category.date).substring(4, 15)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className='text-danger text-center text-capitalize mt-5'>
          please add some categories !!
        </h2>
      )}
    </div>
  );
};

export default ViewCategories;

const Icon = styled.span`
  font-size: 40px;
`;
