import React, { useState } from 'react';
import { FaShoppingBag  } from 'react-icons/fa';
import styled from 'styled-components';

const ProductsForm = () => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const productData = {
      product,
      price,
      brand,
      category,
      description
    };

    console.log(productData);
    setProduct('');
    setPrice('');
    setBrand('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase my-2'>
        <Icon>
          <FaShoppingBag />
        </Icon>{' '}
        Product Details
      </h2>
      <form onSubmit={handleSubmit} className='my-5'>
        <div className='form-group row'>
          <label htmlFor='inputName' className='col-sm-2 col-form-label'>
            Product Name
          </label>
          <div className='col-sm-10 col-lg-8'>
            <input
              type='text'
              className='form-control'
              value={product}
              onChange={e => setProduct(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputWebsite' className='col-sm-2 col-form-label'>
            Price
          </label>
          <div className='col-sm-10 col-lg-8'>
            <input
              type='number'
              className='form-control'
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
            <label htmlFor='inputBrand' className='col-sm-2 col-form-label'>Brand Name</label>
            <div className='col-sm-10 col-lg-8'>
            <select
              className='form-control'
              value={brand}
              onChange={e => setBrand(e.target.value)}
            >
              <option value=''>Choose Brand</option>
              <option value='nike'>Nike</option>
              <option value='adidas'>Adidas</option>
              <option value='reebok'>Reebok</option>
            </select>
          </div>
        </div>
        <div className='form-group row'>
            <label htmlFor='inputBrand' className='col-sm-2 col-form-label'>Category</label>
            <div className='col-sm-10 col-lg-8'>
            <select
              className='form-control'
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value=''>Choose Category</option>
              <option value='formal'>Formal</option>
              <option value='casual'>Casual</option>
              <option value='sports'>Sports</option>
            </select>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputWebsite' className='col-sm-2 col-form-label'>
            Description
          </label>
          <div className='col-sm-10 col-lg-8'>
            <input
              type='text'
              className='form-control'
              value={description}
              onChange={e => setDescription(e.target.value)}
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

export default ProductsForm;

const Icon = styled.span`
  font-size: 40px;
`;
