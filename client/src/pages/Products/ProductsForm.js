import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaShoppingBag } from 'react-icons/fa';
import styled from 'styled-components';

const ProductsForm = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('/api/brands')
      .then(res => {
        setBrands(res.data);
      })
      .catch(err => console.log(err));
    axios
      .get('/api/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (productName && price && brand && category && description) {
      var productData = {
        productName,
        price,
        brand,
        category,
        description
      };

      for (var item in productData) {
        productData[item] = productData[item].toLowerCase();
      }

      setLoading(true);
      axios
        .post('/api/products', productData)
        .then(res => {
          toast.success('Product has been added !!');
          setLoading(false);
          setProductName('');
          setPrice('');
          setBrand('');
          setCategory('');
          setDescription('');
        })
        .catch(err => {
          console.log(err);
          toast.warn('Something went wrong !!');
          toast.warn('Make sure your description is more than 5 cahracters !!');
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
              value={productName}
              onChange={e => setProductName(e.target.value)}
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
          <label htmlFor='inputBrand' className='col-sm-2 col-form-label'>
            Brand Name
          </label>
          <div className='col-sm-10 col-lg-8'>
            <select
              className='form-control'
              value={brand}
              onChange={e=>setBrand(e.target.value)}
            >
              <option value=''>Choose Brand</option>
              {brands.map(brand => (
                <option
                  key={brand._id}
                  className='text-capitalize'
                  value={brand.brandName}
                  onClick={()=> setBrand(brand.brandName)}
                >
                  {brand.brandName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='inputBrand' className='col-sm-2 col-form-label'>
            Category
          </label>
          <div className='col-sm-10 col-lg-8'>
            <select
              className='form-control'
              value={category}
              onChange={e=>setCategory(e.target.value)}
            >
              <option value=''>Choose Category</option>
              {categories.map(category => (
                <option
                  key={category._id}
                  className='text-capitalize'
                  value={category.categoryName}
                  onClick={() => setCategory(category.categoryName)}
                >
                  {category.categoryName}
                </option>
              ))}
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

export default ProductsForm;

const Icon = styled.span`
  font-size: 40px;
`;
