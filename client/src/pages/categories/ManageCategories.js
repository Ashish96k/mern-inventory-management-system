import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdFolder, MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingIcon, setLoadingIcon] = useState(false);

  useEffect(() => {
    axios
      .get('/api/categories')
      .then(res => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        toast.warn('Something went wrong !!!');
        setLoading(false);
      });
  }, [categories]);

  const handleDelete = id => {
    setLoadingIcon(id);
    axios
      .delete(`/api/categories/${id}`)
      .then(res => {
        toast.success('Category has been removed !!');
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
          <MdFolder />
        </Icon>{' '}
        Categories
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
        <ul className='list-group text-capitalize'>
          {categories.map(category => (
            <li
              key={category._id}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              {category.categoryName}
              <button
                className='btn btn-danger btn-sm'
                onClick={() => handleDelete(category._id)}
              >
                {loadingIcon === category._id ? (
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
          please add some categories !
        </h2>
      )}
    </div>
  );
};

export default ManageCategories;

const Icon = styled.span`
  font-size: 40px;
`;
