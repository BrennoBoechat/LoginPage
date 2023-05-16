import { styled } from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    form {
        display: flex;
        flex-direction: column;
        width: 349.44px;
        
        input {
            width: 349.44px;
            height: 49.2px;
            border: 1px solid #E8E8E8;
            border-radius: 5px;
            font-size: 16px;
        }
    }

    .remember {
        display: flex;
        width: 349.44px;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            gap: 10px;
        }

        p {
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        a {
            font-size: 0.875rem;
            text-decoration: none ;
        }

    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 20px;

            .login {
                width: 349.44px;
                height: 49.2px;
                background: #04C35C;
                border-radius: 5px;
                border: none;
                color: white;
                font-size: 1rem;
            }

            .googlelogin {
                display: flex;
                width: 349.44px;
                height: 49.2px;
                border: none;
                border-radius: 5px;
                font-size: 1rem;
                background: #1A202C;
                color: white;
                justify-content: center;
                align-items: center;

                img {
                    width: 19.9px;
                    height: 21.2px;
                    margin: 10px;
                }
            }
        }

        .titlesContainer {
            width: 349.44px;
            margin: 15px;
        h2 {
            font-size: 1rem;
            color: #1A202C;
        }

        h1 {
            font-size: 1.625rem;
            color: #1A202C;
        }
        
    }

    .register {
            display: flex;
            width: 349.44px;
            justify-content: center;

            p {
                font-size: 16px;
            }

            a {
                font-size: 16px;
                text-decoration: none ;
            }
        }
`