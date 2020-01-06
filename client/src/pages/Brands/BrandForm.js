import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTags } from 'react-icons/fa';
import styled from 'styled-components';

const BrandForm = () => {
  const [brandName, setBrand] = useState('');
  const [website, setWebsite] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (brandName && website) {
      let brandData = {
        brandName,
        website
      };

      for (var item in brandData) {
        brandData[item] = brandData[item].toLowerCase();
      }

      setLoading(true);
      axios
        .post('/api/brands', brandData)
        .then(res => {
          toast.success(res.data);
          setLoading(false);
          setBrand('');
          setWebsite('');
        })
        .catch(err => {
          toast.warn('Something went wrong !!');
          setLoading(false);
        });
    } else {
      toast.error('All fields are required !!');
    }
  };

  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase my-2'>
        <Icon>
          <FaTags />
        </Icon>{' '}
        Brand Details
      </h2>
      <form onSubmit={handleSubmit} className='my-5'>
        <div className='form-group row'>
          <label htmlFor='inputName' className='col-sm-2 col-form-label'>
            Brand Name
          </label>
          <div className='col-sm-10 col-lg-8'>
            <input
              type='text'
              className='form-control'
              value={brandName}
              onChange={e => setBrand(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputWebsite' className='col-sm-2 col-form-label'>
            Official Website
          </label>
          <div className='col-sm-10 col-lg-8'>
            <input
              type='text'
              className='form-control'
              value={website}
              onChange={e => setWebsite(e.target.value)}
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

export default BrandForm;

const Icon = styled.span`
  font-size: 40px;
`;
