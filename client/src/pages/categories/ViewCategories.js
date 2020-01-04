import React from 'react';
import { MdFolder } from 'react-icons/md';
import styled from 'styled-components';

const ViewCategories = () => {
  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <MdFolder />
        </Icon>{' '}
        our categories
      </h2>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Category Name</th>
            <th scope='col'>Total Products</th>
            <th scope='col'>Added On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>sports</td>
            <td>10</td>
            <td>12 Dec 2019</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>casual</td>
            <td>7</td>
            <td>12 Oct 2019</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>track</td>
            <td>4</td>
            <td>11 Jan 2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewCategories;

const Icon = styled.span`
  font-size: 40px;
`;
