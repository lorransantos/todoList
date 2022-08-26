import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: #D9D9D9;
    margin: 20px;
    width: 30vw;
    height: 45vh;
    ;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
    margin-top:10px;
    

    input{
        height: 30px;
        margin-bottom: 20px;
        
    }
    button{
        height: 40px;
        margin-top: 20px;
        background-color: #ffffff;
        cursor: pointer;

    }
    label{
        margin: 0;
        gap: 0;
        text-align: start;
    }

`

export const Title = styled.h3`
    display:flex;
    align-items: center;
    justify-content: space-around;
    background-color: #777777;
    border-radius: 10px 10px 0 0;
    color: white;
    margin: 0;
    width: 100%;
    height: 40px; 
    text-transform: uppercase;
`