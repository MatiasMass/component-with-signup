import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const  handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
    console.log(formValues);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    // setFormValues(initialValues)
  }
  
  useEffect(() =>{
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {}
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!values.firstName){
      errors.firstName = "First Name cannot be empty"
    }
    if (!values.lastName){
      errors.lastName = "Last Name cannot be empty"
    }
    if (!values.email){
      errors.email = "Looks like this is not an email"
    }else if (!regex.test(values.email)){
      errors.email = "Looks like this is not an email"
    }
    if (!values.password){
      errors.password = "Password cannot be empty"
    }

    return errors
  }

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <h1 className='title'>Learn to code by <br /> watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. 
          </p>
        </div>
        <div className="right">
          {Object.keys(formErrors).length === 0 && isSubmit 
            ? <div className='success'>Signed up in successfully</div>
            : ""
          }
          <div className="offer">
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </div>
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-text">
                <input type="text" placeholder='First Name' name='firstName' value={formValues.firstName} onChange={handleChange}/>
                <p className='errors'>{formErrors.firstName}</p>
              </div>
              <div className="input-text">
                <input type="text" placeholder='Last Name' name='lastName'  value={formValues.lastName} onChange={handleChange} />
                <p className='errors'>{formErrors.lastName}</p>
              </div>
              <div className="input-text">
                <input type="email" placeholder='Email Address' name='email'  value={formValues.email} onChange={handleChange}/>
                <p className='errors'>{formErrors.email}</p>
              </div>
              <div className="input-text">
                <input type="password" placeholder='Password' name='password'  value={formValues.password} onChange={handleChange}/>
                <p className='errors'>{formErrors.password}</p>
              </div>
            <button type='submit' className='button'>Claim your free trial </button>          
            </form>
            <div className="terms">              
              By clicking the button, you are agreeing to our <span className='red'>Terms and Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
