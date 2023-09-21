import React from "react";
import { Container, TecnologiasSvg, CuboContainer, Title } from "./components";
import {
  GitSvg,
  HtmlSvg,
  JavaScriptSvg,
  CssSvg,
  ReactSvg,
  BootstrapSvg,
  ChakraUISvg,
  NodejsSvg,
  SassSvg,
  StyledComponentsSvg,
  TailWindSvg,
} from "../../components/icons";

export default function SkillsView() {
  return (
    <div>
      <Title>Habilidades</Title>
      <Container>
        <TecnologiasSvg>
          <GitSvg />
          <HtmlSvg />
          <JavaScriptSvg />
          <CssSvg />
          <ReactSvg />
          <BootstrapSvg />
          <ChakraUISvg />
          <NodejsSvg />
          <SassSvg />
          <StyledComponentsSvg />
          <TailWindSvg />
        </TecnologiasSvg>
        <CuboContainer>
          <div className="cubo">
            <div className="cara" />
            <div className="cara" />
            <div className="cara" />
            <div className="cara" />
            <div className="cara" />
            <div className="cara" />
          </div>
          <div className="Con-dado">
            <div className="Square">1</div>
            <div className="Square">2</div>
            <div className="Square">3</div>
            <div className="Square">4</div>
            <div className="Square">5</div>
            <div className="Square">6</div>
          </div>
        </CuboContainer>
      </Container>
    </div>
  );
}
