import React from "react";
import { SocialIcon } from "react-social-icons";
import MadeWithLove from "react-made-with-love";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading></Heading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About Me</FooterLink>
            <FooterLink href="#">Services</FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="#">Experience</FooterLink>
            <FooterLink href="#">Portfolio</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="#">
              <SocialIcon url="https://www.instagram.com/v.i.v.e.k_c.h.o.w.d.a.r.y/" />
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <SocialIcon url="https://github.com/satyachiratla" />
              <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>GitHub</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <SocialIcon url="https://www.linkedin.com/in/satya-chiratla-378b31165/" />
              <i className="fab fa-Linkdin">
                <span style={{ marginLeft: "10px" }}>Linkedin</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <p className="pt-3 text-center" style={{ color: "white" }}>
        <MadeWithLove by="Vivek" emoji /> Copyright&copy;{" "}
        {new Date().getFullYear()}&nbsp; Reserved
      </p>
    </Box>
  );
};
export default Footer;
