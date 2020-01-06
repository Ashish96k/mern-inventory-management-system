import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingIcon, setLoadingIcon] = useState(false);

  useEffect(() => {
    axios
      .get('/api/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => toast.warn('Someting went wrong !!'));
  }, [users]);

  const handleDelete = id => {
    setLoadingIcon(id);
    axios
      .delete(`/api/users/${id}`)
      .then(res => {
        toast.success('User has been removed !!!');
        setLoadingIcon(false);
      })
      .catch(err => {
        toast.warning('Unable to remove user, Something went wrong !!!');
        setLoadingIcon(false);
      });
  };
  return (
    <div className='container'>
      <h2 className='text-dark text-center text-uppercase mt-2 mb-4'>
        <Icon>
          <MdDelete />
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
        <ul className='list-group text-capitalize'>
          {users.map(user => (
            <li
              key={user._id}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              {`${user.firstName} ${user.lastName}`}
              <button
                className='btn btn-danger btn-sm'
                onClick={() => handleDelete(user._id)}
              >
                {loadingIcon === user._id ? (
                  <span
                    className='spinner-grow spinner-grow-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>
                ) : (
                  <MdDelete />
                )}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className='text-danger text-center text-capitalize mt-5'>
          please add some users !!
        </h2>
      )}
    </div>
  );
};

export default ManageUsers;

const Icon = styled.span`
  font-size: 40px;
`;
