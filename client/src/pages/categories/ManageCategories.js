import React from 'react';
import { MdFolder, MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const ManageCategories = () => {
  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <MdFolder />
        </Icon>{' '}
        Categories
      </h2>
      <ul className='list-group'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Sports
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Casual
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Track
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
      </ul>
    </div>
  );
};

export default ManageCategories;

const Icon = styled.span`
  font-size: 40px;
`;
