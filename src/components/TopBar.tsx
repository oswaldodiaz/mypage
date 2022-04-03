import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import profilePic from "../profilePic.jpg";
import { Image } from "../utils/Image";

export const TopBar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">
          <Image
            name="profilePic.png"
            alt="Oswaldo Díaz"
            className="profilePic"
          />
          <span>@imoswidiaz</span>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};
