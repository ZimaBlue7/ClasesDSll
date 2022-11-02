export const isEmailValid = (email) =>{
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}