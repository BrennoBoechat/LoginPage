import React from 'react'
import { HomePageContainer } from './styled'
import HomeImage from "../../assets/home-image.svg"
import LoginSession from '../../components/login/loginSession'

function Homepage() {
  return (
    <HomePageContainer>
        <div className='imageContainer'>
            <img src={HomeImage}></img>
        </div>
        <div className='loginContainer'>
            <LoginSession/>
        </div>
    </HomePageContainer>
  )
}

export default Homepage
