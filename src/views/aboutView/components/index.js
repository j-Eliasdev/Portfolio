import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 10% 10%;
  justify-content: space-between;
  background-color: #122543;

  .about-col-1 {
    flex-basis: 35%;
  }
  .about-col-1 img {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0px 7px;
    border-radius: 10px;
  }
  .about-col-2 {
    flex-basis: 60%;
  }
  .img-me {
    width: 400px;
  }
  .title {
    color: aqua;
    font-size: 40px;
    font-weight: bold;
  }
  .sub-title {
    font-size: 21px;
    text-decoration: underline;
    text-decoration-color: aqua;
  }
  .tab-experience {
    display: flex;
    margin: 20px 0 40px;
    justify-content: space-between;
  }

  .col-exp-left {
    flex-basis: 45%;
  }
  .col-exp-right {
    flex-basis: 45%;
  }

  h3 {
    margin-bottom: 8px;
  }
  .icons-calendar {
    margin-right: 6px;
  }
  .little-card {
    padding: 10px;
    margin-bottom: 25px;
    border-radius: 5px;
    background-color: #0b1629;
  }
  .little-card p {
    color: aqua;
  }

  /* BreakPoint */

  @media (max-width: 1290px) {
    .about-col-1 {
      flex-basis: 55%;
    }
    .about-col-2 {
      flex-basis: 45%;
      margin-top: 50px;
    }
    .tab-experience {
      display: block;
    }
  }
  @media (max-width: 987px) {
    display: block;
    .tab-experience {
      display: flex;
    }
    .about-col-1 {
      display: flex;
      justify-content: center;
    }
    .img-me {
      width: 300px;
      margin-top: 10px;
    }
  }

  @media (max-width: 830px) {
    padding: 20% 10%;
  }
  @media (max-width: 715px) {
    padding-bottom: 10px;
    .tab-experience {
      display: block;
    }
  }
  @media (max-width: 490px) {
    padding: 30% 10%;
  }
`;
