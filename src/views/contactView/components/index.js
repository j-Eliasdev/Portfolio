import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0 10%;

  .sub-title {
    font-size: 50px;
  }
  .contact-sci {
    display: flex;
    justify-content: space-between;
    bottom: 40px;
    width: 170px;
  }
  .contact-sci a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid aqua;
    border-radius: 50%;
    font-size: 20px;
    color: aqua;
    text-decoration: none;
    z-index: 1;
    margin-top: 30px;
    overflow: hidden;
    transition: 0.5s;
  }

  .contact-sci a:hover {
    color: #282c34;
  }

  .contact-sci a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    background: aqua;
    transition: 0.5s;
  }
  .contact-sci a:hover::before {
    width: 100%;
    color: #282c34;
  }

  .col-left {
    flex-basis: 35%;
    height: 450px;
  }

  .col-left p {
    margin-top: 30px;
  }
  .icons-contact {
    color: aqua;
    margin-right: 15px;
    font-size: 20px;
  }

  .btn-box a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    margin-top: 30px;
    background: transparent;
    border: 2px solid aqua;
    border-radius: 8px;
    font-size: 15px;
    color: aqua;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
  }
  .btn-box a:hover {
    color: #282c34;
  }

  .btn-box a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: aqua;
    z-index: -1;
    transition: 0.5s;
  }
  .btn-box a:hover::before {
    width: 100%;
  }

  .col-right {
    flex-basis: 60%;
  }

  .col-right form {
    width: 100%;
  }

  form input,
  form textarea {
    width: 100%;
    border: 0;
    outline: none;
    background-color: #122543;
    padding: 15px;
    margin: 15px 0;
    color: #fff;
    font-size: 18px;
    border-radius: 6px;
  }

  .btn-form {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    margin-top: 30px;
    background: aqua;
    border: 2px solid aqua;
    border-radius: 8px;
    font-size: 15px;
    color: #282c34;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
    transition: 0.5s;
  }
  .btn-form:hover {
    color: aqua;
  }

  .btn-form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #122543;
    z-index: -1;
    transition: 0.5s;
  }
  .btn-form:hover::before {
    width: 100%;
  }
  .error{
    color: #ff3333;
    font-weight: bold;
    margin-top: -10px;
  }
  #msg{
    display: block;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #14A44D;
  }

  @media (max-width: 990px) {
    display: block;
    padding: 30px 10%;
    .col-left {
      height: fit-content;
    }
  }
`;
