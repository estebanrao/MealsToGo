import * as firebase from 'firebase';

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const registerRequest = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const logoutRequest = () => {
  firebase.auth().signOut();
};
