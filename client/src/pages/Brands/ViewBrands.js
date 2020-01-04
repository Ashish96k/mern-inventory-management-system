import React from 'react';
import { FaTags } from 'react-icons/fa';
import styled from 'styled-components';

const ViewBrands = () => {
  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <FaTags />
        </Icon>{' '}
        our brands
      </h2>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Total Products</th>
            <th scope='col'>Added On</th>
            <th scope='col'>Official Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Nike</td>
            <td>10</td>
            <td>12 Dec 2019</td>
            <td>nike.com</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Adidas</td>
            <td>7</td>
            <td>12 Oct 2019</td>
            <td>adidas.com</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Reebok</td>
            <td>4</td>
            <td>11 Jan 2020</td>
            <td>reebok.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewBrands;

const Icon = styled.span`
  font-size: 40px;
`;
