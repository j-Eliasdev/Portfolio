import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 0% 10%;

  @media (max-width: 995px) {
    display: grid;
    align-items: center;
    justify-content: center;
    padding-bottom: 10%;
  }
`;

export const TecnologiasSvg = styled.div`
  width: 35%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 10%;
  z-index: 10;
  @media (max-width: 995px) {
    position: static;
    margin: 120px 0 50px 0;
  }

`;
