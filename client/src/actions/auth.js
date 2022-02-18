import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(data);
    if(data.value){
    dispatch({ type: AUTH, data });

    router('/');
    }
    else{
      alert(data.message);
    }
  } catch (error) {
    //(data);
    alert('Invalid credentials');
    console.log("In sign error");
    console.log(error.message);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};