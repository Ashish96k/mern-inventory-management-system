import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiUsers } from 'react-icons/fi';
import styled from 'styled-components';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('/api/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className='table-responsive'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <FiUsers />
        </Icon>{' '}
        Users
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
      ) : users.length > 0 ? (
        <table className='table text-capitalize'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Address</th>
              <th scope='col'>City</th>
              <th scope='col'>State</th>
              <th scope='col'>Zip</th>
              <th scope='col'>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th scope='row'>{index + 1}</th>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td className='text-lowercase'>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zip}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className='text-danger text-center text-capitalize mt-5'>
          please add some users !!
        </h2>
      )}
    </div>
  );
};

export default ViewUsers;

const Icon = styled.span`
  font-size: 40px;
`;
