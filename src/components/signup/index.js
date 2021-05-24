import Modal from '../Modal/index'
import AuthModal from '../AuthModalLayout/index'
import src from '../../images/img.jpg'
import TextField from '../common/Textfield'
import Header from '../common/Header'
import { Wrapper } from './styles'
import SubmitButton from '../common/SubmitButton'
import { useState } from 'react'
import {isEmail,isPassword,isUsername} from '../../utils'

const initalState = {
form: {
  email: '',
  name: '',
  password: ''
},
errors: {
  email: '',
  name: '',
  password: ''
}
}
const Signup = () => {

  const [state, setSate] = useState(initalState)
  const {form,errors} = state
  const { name, email, password } = form 

  const handleChange = (e) => {
    const {target:{name,value}} = e
    console.log(name,value) 

    setSate({...errors, form:{...form,[name]:value}})
  }   

  const validate = () => {
    // const errors = {...form,errors: {email: isEmail(email), name: isUsername(name), password: isPassword(password)}}
    setSate(errors)
    return errors
  }

  const handleSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault()
    // setSate({...form,errors: {email: '', name: '', password: ''}})
    const {errors: {email,name,password}}=validate()
    console.log(email,name,password)
  }
  return (
    <Modal show>
      <AuthModal
      img={src}
      >

        <Wrapper onSubmit={handleSubmit}>
        <Header>Signup</Header>
        <TextField
          name="name"
          type="text"
          placeholder="enter your name"
          onChange={handleChange}
          value={name}
          // error={errors.email}
        />
        <TextField
          name="email"
          type="text"
          variant="outlined"
          placeholder="enter your password"
          onChange={handleChange}
          value={email}
          // error={errors.name}
        />
         <TextField
          name="password"
          type="text"Header
          variant="outlined"
          placeholder="enter your email"
          onChange={handleChange}
          value={password}
          // error={errors.password}
        />
        {/* <SubmitButton
          text="Submit"
          onClick={handleSubmit}
        /> */}
        <button onClick={handleSubmit} type="button"> 
        Submit
        </button>
      </Wrapper>
      </AuthModal>
    </Modal>
  );
}
 
export default Signup;