import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 100vh;
  padding: 0 10%;
  background-color: #122543;

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
  }
  .title {
    font-size: 50px;
  }
  .card-sci {
    position: absolute;
    display: flex;
    align-items: end;
    justify-content: space-evenly;
    bottom: 10px;
    right: 10px;
    width: 90px;
  }
  .card-sci a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
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
  .card-sci a:hover {
    color: #282c34;
  }
  .card-sci a::before {
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
  .card-sci a:hover::before {
    width: 100%;
    color: #282c34;
  }

  img {
    width: 300px;
    height: 200px;
    border-radius: 5px;
  }
  .card {
    position: relative;
    width: 300px;
    height: 400px;
  }

  @media (max-width: 1199px) {
  padding: 15px 10%;

    .title {
      margin: 20px 0;
    }
  }
  @media (max-width: 787px) {
    .cards{
    justify-content: center;;

    }
  }
`;
