import { ADD_USERS, DELETE_USERS, EDIT_USERS, GET_USERS, INFO} from "./actiontypes";
import axios from 'axios';  // Fix the import statement





export const getUsers = () => async (dispatch) => {  // Fix the async keyword
    try {
        const res = await axios.get("/get");
        console.log(res);
        
        if (res && res.data) {  // Check if res.data exists
            dispatch({
                type: GET_USERS,
                payload: res.data,
            });
        }
    } catch (error) {
        alert('get error');
    }
};

export const addUser = (newUser) => async (dispatch) => {
    try {
        const { data } = await axios.post("/add", newUser);
        dispatch({
            type: ADD_USERS,
            payload: data,
        });
    } catch (error) {
        alert('post error');
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/delete/${id}`);
        dispatch({
            type: DELETE_USERS,
            payload: id,
        });
    } catch (error) {
        alert('delete error');
    }
};

export const editUsers = (editedUser) => async (dispatch) => {
    try {
        const res = await axios.put(`/update/${editedUser.id}`, editedUser);
        dispatch({
            type: EDIT_USERS,
            payload: res.data,
        });
    } catch (error) {
        alert('edit error');
    }
};

export const getUser = (userId) => {
    return async (dispatch) => {
      try {
        
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
  
        dispatch({
          type: 'INFO',
          payload: userData,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        
      }
    };
  };
  
