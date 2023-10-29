import React from 'react'
import styled from 'styled-components';


const ColFlexbox = styled.div`
    display: flex;
    flex-direction: column;
    border:1px solid green;
    min-width:400px;
    margin: 0 auto;
    max-width:650px;
    
    background: linear-gradient(to bottom right, #a8bbc6,  #80a1b4,  #598fac );

    box-sizing: border-box;
    padding: 20px 90px;
    gap:10px;
    border-radius: 20px;
    min-width:100px;
    box-shadow: 2px 2px 1px gray;



`;

const CenteredH1 = styled.h1`
    align-self: center;
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-size:40px;
    font-weight:lighter;
`;




const TextInput = styled.input`
    height: 35px;
    border-radius: 10px;
    outline: none;
    border: 1px gray solid;
    padding-left:10px;
`

const Text = styled.span`

    font-weight: ${props => props.$bold || "normal"};
    text-decoration: ${props => props.$underline || "none"};
    color: ${props => props.$textColor || 'initial'}  ;
    align-self: ${props => props.$alignSelf || 'initial'}  ;
`
const PrimaryBtn = styled.button`
    background: #1575a7;
    color: white;
    border: none;
    width: 50%;
    margin: 15px auto;
    align-self: center;
    min-width: 30px;
    height: 40px;
    /* padding: 10px 20px; */
    border-radius: 10px;
    -webkit-box-shadow:0px 0px 23px 2px rgba(95,163,200,1);
    -moz-box-shadow: 0px 0px 23px 2px rgba(95,163,200,1);
    box-shadow: 0px 0px 23px 2px rgba(95,163,200,1);    

`


function LoginPage() {
    return (

        <ColFlexbox>
            <CenteredH1>Login</CenteredH1>


            <Text $bold='bold' >Login ID</Text>

            <TextInput placeholder='Enter Login ID' />


            <Text $bold='bold'>Password</Text>

            <TextInput placeholder='Enter Password' type='password' />

            <Text $textColor="rgb(253, 179, 20)" $alignSelf="end"  >Change Password</Text>

            <Text $textColor='rgb(108, 107, 107)'>
                <input type="checkbox" id='Remember' />
                <label htmlFor="Remember"> Remember me</label>
            </Text>

            <Text $textColor='rgb(108, 107, 107)'>
                <input type="checkbox" id='Agree' />
                <label htmlFor="Agree" > <span>Agree to</span>  <Text $underline="underline" $textColor="rgb(253, 179, 20)" > Terms & Conditions</Text> </label>

            </Text>

            <PrimaryBtn>Login</PrimaryBtn>



            <Text $alignSelf="center" >Don't have account? <Text $bold="bold" $textColor="rgb(253, 179, 20)">Register Here</Text></Text>


        </ColFlexbox>


    )
}

export default LoginPage