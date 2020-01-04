import React from 'react';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const ManageUsers = () => {
  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <MdDelete />
        </Icon>{' '}
        Users
      </h2>
      <ul className='list-group'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Cras justo odio
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Dapibus ac facilisis in
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Morbi leo risus
          <button className='btn btn-danger btn-sm'><MdDelete /></button>
        </li>
      </ul>
    </div>
  );
};

export default ManageUsers;

const Icon = styled.span`
  font-size: 40px;
`;
