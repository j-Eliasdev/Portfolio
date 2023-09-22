import React from "react";
import { Container, TecnologiasSvg, Title } from "./components";
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
import DadoComponent from "../../components/dado3D/dado3d";

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
        <DadoComponent/>
      </Container>
    </div>
  );
}
