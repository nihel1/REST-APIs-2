// Import necessary components and styles
import React, { useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import { getUsers, editUsers } from '../redux/actions';  
import { useDispatch } from 'react-redux';

const EditUser = ({ user }) => {
  console.log(user);

  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedUser = {
      id: user._id,
      fullName,
      email,
      phone,
    };

    dispatch(editUsers(editedUser));
    dispatch(getUsers());

    handleClose();
  };

  return (
    <div>
      {/* Apply the style prop to set the background color and border color */}
      <Button 
        variant="primary" 
        style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }} 
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* The rest of your Modal component */}
      </Modal>
    </div>
  );
};

export default EditUser;
