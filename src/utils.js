
  const emailRegex = /\S+@\S+\.\S+/;
  const PawwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const nameRegex = /^[A-Za-z0-9]{8,}$/;
   

export const isEmail = (email) => {
   emailRegex.test(email)
   if(emailRegex.test(email)){
     return ''
   }
   return 'Please enter valid email'
}

export const isPassword = (password) => {
  if(PawwordRegex.test(password)){
    return ''
  }
  return 'Please enter valid email'
}

export const isUsername = (name) => {
  if(nameRegex.test(name)){
    return ''
  }
  return 'Name should be at least 3 letter long'
}