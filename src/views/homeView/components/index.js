import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 10%;
  

  .col-left {
    flex-basis: 45%;
  }
  .col-right {
    flex-basis: 55%;
    display: flex;
    justify-content: center;
  }
  .home-content {
    max-width: 600px;
  }
  .home-content h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.2;
  }
  .home-content h3 {
    font-size: 40px;
    margin-top: 40px;
    font-weight: 400;
    color: aqua;
    height: 30px;
  }
  .img-landing {
    width: 500px;
  }
  
  /* BreakPoint */

  @media (max-width: 1100px) {
    .home-content {
      margin-top: 200px;
    }
    .home-content h3 {
      height: 80px;
    }
    .col-left {
      height: 450px;
    }
    .img-landing {
      width: 400px;
    }
  }
  @media (max-width: 1038px) {
    display: block;
    .col-left {
      height: fit-content;
    }
  }
  @media (max-width: 730px) {
    .home-content h3 {
      font-size: 30px;
    }
  }
  @media (max-width: 470px) {
    .home-content h1 {
      font-size: 40px;
    }
    .home-content h3 {
      font-size: 20px;
    }
    .img-landing {
      width: 350px;
    }
  }
`;
