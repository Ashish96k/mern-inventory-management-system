import React from 'react';
import { FaStoreAlt } from 'react-icons/fa';
import styled from 'styled-components';

const Stores = () => {
  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <FaStoreAlt />
        </Icon>{' '}
        our stores
      </h2>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Estd.</th>
            <th scope='col'>Contact</th>
            <th scope='col'>Address</th>
            <th scope='col'>Postal Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Brad Electronics</td>
            <td>22 Dec 2019</td>
            <td>7758469874</td>
            <td>123 St. Peter Street, NY</td>
            <td>5589</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob Furnitures</td>
            <td>12 Oct 2019</td>
            <td>7758469874</td>
            <td>St. Queens Street, LA</td>
            <td>51189</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry Designers</td>
            <td>11 Jan 2020</td>
            <td>7766589874</td>
            <td>Square Gardens, VAN</td>
            <td>51100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stores;

const Icon = styled.span`
  font-size: 40px;
`;
