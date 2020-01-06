import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStoreAlt } from 'react-icons/fa';
import styled from 'styled-components';

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/stores')
      .then(res => {
        setLoading(false);
        setStores(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <FaStoreAlt />
        </Icon>{' '}
        our stores
      </h2>
      {loading ? (
        <div className='d-flex justify-content-center mt-5'>
          <div
            className='spinner-grow'
            style={{ width: '4rem', height: '4rem' }}
            role='status'
          >
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : stores.length > 0 ? (
        <table className='table text-capitalize'>
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
            {stores.map((store, index) => (
              <tr key={store._id}>
                <th scope='row'>{index + 1}</th>
                <td>{store.storeName}</td>
                <td>{Date(store.date).substring(4, 15)}</td>
                <td>{store.contact}</td>
                <td>{store.address}</td>
                <td>{store.postalCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className='text-danger text-center text-capitalize mt-5'>
          please register some stores !!
        </h2>
      )}
    </div>
  );
};

export default Stores;

const Icon = styled.span`
  font-size: 40px;
`;
