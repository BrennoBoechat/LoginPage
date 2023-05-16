import styled from "styled-components";

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    @media (max-device-width : 768px) {
            align-items: center;
            justify-content: center;
}

    .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100vh;
        background: #F7FAFC;

        img {
            width: 400px;
            height: 330px;
        }

        @media (max-device-width : 768px) {
            display: none;
}   
    }

    .loginContainer {
        width: 50%;
        height: 100vh ;
        display: flex;
        background: #FFFFFF;
    }
`