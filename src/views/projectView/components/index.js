import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 0 10%;
  background-color: #122543;

  .Title {
    position: absolute;
    top: 60px;
    font-size: 50px;
  }


`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  color: white;
  background-color: transparent;

  img {
    width: 300px;
    height: 200px;
    border-radius: 5px;
  }
`;
export const SciDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  bottom: 10px;
  right: 10px;
  width: 90px;

  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: transparent;
    border: 2px solid aqua;
    border-radius: 50%;
    font-size: 20px;
    color: aqua;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
  }

  a:hover {
    color: #282c34;
  }

  a::before {
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
  a:hover::before {
    width: 100%;
    color: #282c34;
  }
`;
