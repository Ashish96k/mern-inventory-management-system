import React from 'react';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const ManageBrands = () => {
  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <MdDelete />
        </Icon>{' '}
        Brands
      </h2>
      <ul className='list-group'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Nike
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Adidas
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Reebok
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
      </ul>
    </div>
  );
};

export default ManageBrands;

const Icon = styled.span`
  font-size: 40px;
`;
