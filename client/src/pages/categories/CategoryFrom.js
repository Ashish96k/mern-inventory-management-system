import React, { useState } from 'react';
import { MdFolder } from 'react-icons/md';
import styled from 'styled-components';

const BrandForm = () => {
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const categoryData = {
      category
    };

    console.log(categoryData);
    setCategory('');
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
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <button className='btn btn-dark mx-5 my-4 btn-block text-uppercase'>
            submit details
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandForm;

const Icon = styled.span`
  font-size: 40px;
`;
