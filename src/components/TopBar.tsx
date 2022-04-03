import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import profilePic from "../profilePic.jpg";

export const TopBar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">
          <img src={profilePic} className="profile-pic" alt="Oswaldo Díaz" />
          <span>@imoswidiaz</span>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};
