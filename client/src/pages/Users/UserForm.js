import React, { useState } from 'react';
import { MdPersonAdd } from 'react-icons/md';
import styled from 'styled-components';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zip,
      gender
    };

    console.log(userData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setZip('');
    setGender('');
  };

  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase my-2'>
        <Icon>
          <MdPersonAdd />
        </Icon>{' '}
        User Details
      </h2>
      <form onSubmit={handleSubmit} className='my-4'>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputFirstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputLastName'>Last Name</label>
            <input
              type='text'
              className='form-control'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputEmail'>Email</label>
            <input
              type='email'
              className='form-control'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputContact'>Phone</label>
            <input
              type='text'
              className='form-control'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='inputAddress'>Address</label>
          <input
            type='text'
            className='form-control'
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputCity'>City</label>
            <input
              type='text'
              className='form-control'
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </div>
          <div className='form-group col-md-2'>
            <label htmlFor='inputZip'>Zip</label>
            <input
              type='text'
              className='form-control'
              value={zip}
              onChange={e => setZip(e.target.value)}
            />
          </div>
          <div className='form-group col-md-4'>
            <label htmlFor='inputGender'>Gender</label>
            <select
              className='form-control'
              value={gender}
              onChange={e => setGender(e.target.value)}
            >
              <option value=''>Choose Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='transgender'>Transgender</option>
            </select>
          </div>
        </div>
        <div className='container'>
          <button
            type='submit'
            className='btn btn-dark btn-block text-uppercase mt-4'
          >
            Submit Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

const Icon = styled.span`
  font-size: 40px;
`;
