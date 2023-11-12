import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteUser, getUsers } from '../redux/actions';
import EditUser from './EditUser';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{user.fullName}</Card.Title>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          {/* Apply the style prop to set the background color, border color, and border radius */}
          <button
            style={{
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderRadius: '10px', // Adjust the value to control the roundness
            }}
            onClick={() => {
              dispatch(deleteUser(user._id));
              dispatch(getUsers());
            }}
          >
            Delete
          </button>
          <EditUser user={user} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
