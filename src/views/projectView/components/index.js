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
    gap: 10px;
    justify-content: space-evenly;
  }
  .card {
    width: 350px;
    height: 350px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  .card img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: transform 0.5s;
  }
  .layer p{
    font-size: 18px;
    font-weight: 600;
  }
  .title {
    font-size: 50px;
  }
  .layer {
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), #00ffff);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    transition: height 0.5s;
  }
  .layer h2 {
    font-weight: 600;
    margin-bottom: 20px;
  }

  .card:hover img {
    transform: scale(1.1);
  }
  .card:hover .layer {
    height: 100%;
  }

  .card-sci {
    display: flex;
    align-items: end;
    justify-content: space-evenly;
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
    border: 2px solid #122543;
    border-radius: 50%;
    font-size: 20px;
    color: #122543;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
  }
  .card-sci a:hover {
    color: #00ffff;
  }
  .card-sci a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    background: #122543;
    transition: 0.5s;
  }
  .card-sci a:hover::before {
    width: 100%;
    color: #282c34;
  }

  /* ---------------BreakPoint---------------- */
  @media (max-width: 1199px) {
    padding: 15px 10%;
  }
  @media (max-width: 877px) {
    .cards {
      gap: 70px;
      margin: 60px 0;
    }
  }
  @media (max-width: 410px) {
    .card {
    width: 300px;
    height: 300px;
  }
  }
`;
