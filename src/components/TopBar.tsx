import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
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
          <strong>@imoswidiaz</strong>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};
