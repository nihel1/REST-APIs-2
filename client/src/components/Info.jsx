import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions';

const Info = ({ items }) => {
  const { _id } = useParams();
  const item = items.find((el) => el._id === _id);

  const dispatch = useDispatch();
  dispatch(getUser());

  const history = useHistory();

  const handleReturn = () => {
    // Navigate back to the home page
    history.push('/');
  };

  return (
    <div>
      <p>{item.fullName}</p>
      <p>{item.email}</p>
      <p>{item.phone}</p>
      <p>{item.age}</p>
      <button onClick={handleReturn}>Retour</button>
    </div>
  );
};

export default Info;
