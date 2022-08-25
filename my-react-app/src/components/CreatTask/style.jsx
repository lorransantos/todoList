import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    
    border-radius: 10px;
    background-color: #d4cdcd;
    margin: 20px;
    width: 400px;
    height: 50vh;
    ;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
    gap:15px;

    input,button{
        height: 30px;
    }

`

export const Title = styled.h3`
    display:flex;
    align-items: center;
    justify-content: space-around;
    background-color: #636161;
    border-radius: 10px 10px 0 0;
    color: white;
    margin: 0;
    width: 100%;
    height: 40px; 
`