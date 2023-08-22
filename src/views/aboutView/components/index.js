import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 0% 10%;
  background-color: #122543;

  .about-col-1 {
    flex-basis: 35%;
  }
  .about-col-1 img {
    width: 100%;
  }

  .about-col-2 {
    flex-basis: 60%;
    height: 500px;
  }
  .sub-title {
    color: aqua;
    font-size: 40px;
    font-weight: bold;
  }
  .tab-experience {
    display: flex;
    margin: 20px 0 40px;
    justify-content: space-between;
  }

  .col-left {
    flex-basis: 45%;
  }
  .col-right {
    flex-basis: 45%;
  }

  h3 {
    margin-bottom: 8px;
  }
  .icons {
    margin-right: 6px;
  }
  .div-education {
    position: relative;
    padding: 5px;
    margin-bottom: 25px;
    border: 1px solid aqua;
    border-radius: 5px;
    background-color: #0B1629;
  }
  p {
    color: aqua;
  }
  .descripcion {
    color: white;
  }

  .conectord {
    height: 2px;
    background-color: aqua;
    width: 0px;
    position: absolute;
    top: 0%;
    left: -17px;
    z-index: 5;
  }
  .circulod {
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: aqua;
    float: left;
    position: relative;
    bottom: 4px;
  }
`;
