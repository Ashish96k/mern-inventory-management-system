import React from 'react';
import { FaShoppingBag  } from 'react-icons/fa';
import styled from 'styled-components';

const ViewProducts = () => {
  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <FaShoppingBag />
        </Icon>{' '}
        our products
      </h2>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Brand</th>
            <th scope='col'>Category</th>
            <th scope='col'>Date Added</th>
            <th scope='col'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>T-shirt</td>
            <td>$10</td>
            <td>nike</td>
            <td>sports</td>
            <td>22 Dec 2019</td>
            <td>Lorem ipsum dollar</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Trousers</td>
            <td>$17</td>
            <td>nike</td>
            <td>sports</td>
            <td>09 Nov 2019</td>
            <td>Lorem ipsum dollar</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Shirt</td>
            <td>$12</td>
            <td>adidas</td>
            <td>sports</td>
            <td>15 Oct 2019</td>
            <td>Lorem ipsum dollar</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewProducts;

const Icon = styled.span`
  font-size: 40px;
`;
