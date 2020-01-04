import React from 'react';
import { FiUsers } from 'react-icons/fi';
import styled from 'styled-components';

const ViewUsers = () => {
  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <FiUsers />
        </Icon>{' '}
        Users
      </h2>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Address</th>
            <th scope='col'>City</th>
            <th scope='col'>Zip</th>
            <th scope='col'>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto@gmail.com</td>
            <td>7758469874</td>
            <td>123 St. Peter Street, NY</td>
            <td>NY</td>
            <td>5589</td>
            <td>Male</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton@gmail.com</td>
            <td>7758469874</td>
            <td>St. Queens Street, LA</td>
            <td>LA</td>
            <td>51189</td>
            <td>Male</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>theBird2gmail.com</td>
            <td>7766589874</td>
            <td>Square Gardens, VAN</td>
            <td>VAN</td>
            <td>51100</td>
            <td>Transgender</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;

const Icon = styled.span`
  font-size: 40px;
`;
