import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'

import profile from '../../assets/profile.gif'
import Loader from '../../components/Loader/loader'

import './Login.css'

type User = {
  email: string
  password: string
}

type RegisterResponse = {
  access_token: string
}

const Login = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [user] = useState<User>({
    email: 'sh@email.com',
    password: 'nilson',
  })
  
  const navigate = useNavigate()

  const onSubmit = () => {
    setLoading(true)

    axios
      .post<RegisterResponse, AxiosResponse<RegisterResponse, User>, User>(
        `http://localhost:8000/auth/register`,
        user,
      )
      .then((res) => {
        setTimeout(() => {
          const { access_token: accessToken } = res.data
          login(accessToken)
        }, 2000)
      })
      .catch((error) => console.log('error', error))
  }

  const login = (accessToken: string) => {
    setLoading(false)
    localStorage.setItem('token', accessToken)
    navigate('/')
  }

  return (
    <div className="Login">
      <div>
        I am login page that helps you demonstrate what is going to happen when
        you login
      </div>
      <img src={profile} width={200} />
      <button
        className={isLoading ? 'loading  Login-button' : ' Login-button'}
        onClick={onSubmit}
      >
        {isLoading ? <Loader /> : 'login with bank id'}
      </button>
    </div>
  )
}

export default Login
