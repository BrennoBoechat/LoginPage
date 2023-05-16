import React from 'react'
import { useState } from 'react'
import { LoginContainer } from './styled'
import LoginImage from "../../assets/google-image.svg"

function LoginSession() {

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const handleInputEmail = (event) => {
        setInputEmail(event.target.value)
    }

    const handleInputPassword = (event) => {
        setInputPassword(event.target.value)
    }

  return (
    <LoginContainer>
        <div className='titlesContainer'>
                <h2>Bem vindo de volta</h2>
                <h1>Faça login na sua conta</h1>
            </div>
        <form>
            <label>
                <p>E-mail</p>
                <input type='text' value={inputEmail} onChange={handleInputEmail}/>
            </label>
            <label>
                <p>Senha</p>
                <input type='password' value={inputPassword} onChange={handleInputPassword}/>
            </label>
        </form>
        <div className='remember'>
            <div>
                <input className='checkbox' type='radio'></input>
                <p>Lembre de mim</p>
            </div>
            <a href='https://www.google.com/webhp?hl=pt-PT&sa=X&ved=0ahUKEwjHwrDgh_j-AhWou5UCHeElA3MQPAgI'>Esqueceu sua senha?</a>
        </div>
        <div className='buttons'>
            <button className='login'>Entrar</button>
            <button className='googlelogin'><img src={LoginImage}></img>Ou faça login com o Google</button>
        </div>
        <div className='register'>
            <p>Não tem uma conta? <a href='https://www.google.com/search?q=google&oq=google+&aqs=chrome..69i57j69i59j69i65j69i60l2j69i65l2j69i60.1415j0j4&sourceid=chrome&ie=UTF-8'>Cadastre-se</a></p>
        </div>
    </LoginContainer>
  )
}

export default LoginSession