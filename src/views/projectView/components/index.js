import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  min-height: 100vh;
  padding: 0 10%;
  background-color: #122543;
  .title {
    font-size: 50px;
    padding-top: 10%;

    @media (max-width: 1174px) {
     margin: 100px 0 50px 0;
    }
   
  }
  .atropos {
    width: 300px;
    height: 400px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 20px;
    margin-bottom: 50px;
  }

  .card-sci {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 90px;
    display: flex;
    justify-content: space-between;
  }
  .card-sci a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid #00ffff;
    border-radius: 50%;
    font-size: 25px;
    color: #00ffff;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
  }
  .card-sci a:hover {
    color: #282c34;
    border: 2px solid #282c34;
    background: #00ffff;
  }

  /* ---------------BreakPoint---------------- */
 
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(0, 153, 255, 0.435);
  border-radius: 10px;
  overflow: hidden;
  .card-img {
    position: absolute;
    z-index: -1;
  }
  .card-img img {
    width: 300px;
  }
  .card-info {
    height: 100%;
    padding: 10%;
  }
  .icon-svg{
    position: relative;
    display: grid;
    width: 100px;
    margin-top: 25px;
    justify-content:space-evenly;
    gap: 5px;
    grid-template-columns: repeat(3, 1fr)
  }
  h3{
    grid-column: 1/4;
  }

  h1 {
    color: aqua;
    font-size: 27px;
    margin: 10px 0;
  }
  p{
    font-size: 20px;
  }
`;
