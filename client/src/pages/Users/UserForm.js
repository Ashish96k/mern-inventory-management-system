import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { MdPersonAdd } from 'react-icons/md';
import styled from 'styled-components';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      address &&
      city &&
      state &&
      zip &&
      gender
    ) {
      let userData = {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zip,
        gender
      };

      for (var item in userData) {
        userData[item] = userData[item].toLowerCase();
      }

      setLoading(true);
      axios
        .post('/api/users', userData)
        .then(res => {
          toast.success('User Saved');
          setLoading(false);
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setAddress('');
          setCity('');
          setState('');
          setZip('');
          setGender('');
        })
        .catch(err => {
          toast.warn('Contact details cannot be same !!');
          setLoading(false);
        });
    } else {
      toast.error('All Fields are Mandatory');
    }
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
          <div className='form-group col-md-3'>
            <label htmlFor='inputCity'>City</label>
            <input
              type='text'
              className='form-control'
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </div>
          <div className='form-group col-md-3'>
            <label htmlFor='inputState'>State</label>
            <input
              type='text'
              className='form-control'
              value={state}
              onChange={e => setState(e.target.value)}
            />
          </div>
          <div className='form-group col-md-3'>
            <label htmlFor='inputZip'>Zip</label>
            <input
              type='text'
              className='form-control'
              value={zip}
              onChange={e => setZip(e.target.value)}
            />
          </div>
          <div className='form-group col-md-3'>
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
            {loading ? (
              <span
                className='spinner-grow spinner-grow-sm'
                role='status'
                aria-hidden='true'
              ></span>
            ) : (
              'SUBMIT INFO'
            )}
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
