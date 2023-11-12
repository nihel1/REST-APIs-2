import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';
import UserCard from './UserCard';

const UserList = () => {
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '5%' }}>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {users.map((el, keyuser) => (
            <UserCard key={keyuser} user={el} />
          ))}
        </>
      )}
    </div>
  );
};

export default UserList;
