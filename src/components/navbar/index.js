import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  background-color: transparent;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  color: white;
  font-family: roboto;
  box-shadow: 3px 3px 3px 3px black;

  h1 {
    font-weight: bold;
  }
`;

export default function NavarComponent() {
  return (
    <main>
      <Container>
        <h1>Portfolio</h1>
        <div>
          <ul>
            <li>About me</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
