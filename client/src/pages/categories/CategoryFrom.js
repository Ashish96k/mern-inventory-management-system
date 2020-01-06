import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdFolder } from 'react-icons/md';
import styled from 'styled-components';

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (categoryName) {
      let categoryData = {
        categoryName
      };

      for (var item in categoryData) {
        categoryData[item] = categoryData[item].toLowerCase();
      }

      setLoading(true);
      axios
        .post('/api/categories', categoryData)
        .then(res => {
          toast.success(res.data);
          setLoading(false);
          setCategoryName('');
        })
        .catch(err => {
          console.log(err);
          toast.warn('Something went wrong !!');
          setLoading(false);
        });
    } else {
      toast.error('Mandatory Field !!')
    }
  };

  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase my-2'>
        <Icon>
          <MdFolder />
        </Icon>{' '}
        Category Details
      </h2>
      <form onSubmit={handleSubmit} className='my-5'>
        <div className='form-group row'>
          <label htmlFor='inputName' className='col-sm-2 col-form-label'>
            Category Name
          </label>
          <div className='col-sm-10 col-lg-8'>
            <input
              type='text'
              className='form-control'
              value={categoryName}
              onChange={e => setCategoryName(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <button className='btn btn-dark mx-5 my-4 btn-block text-uppercase'>
            {loading ? (
              <span
              className='spinner-grow spinner-grow-sm'
              role='status'
              aria-hidden='true'
            ></span>
            ) : (
              'submit details'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;

const Icon = styled.span`
  font-size: 40px;
`;
