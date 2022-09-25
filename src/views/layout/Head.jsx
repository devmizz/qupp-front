import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { getCookie } from "../../util/cookie";

function Head() {
  var login = (
    <Nav>
      <Nav.Link href="/login">로그인</Nav.Link>
      <Nav.Link href="/create_account">회원가입</Nav.Link>
    </Nav>
  );

  if(getCookie("token")) {
    console.log(getCookie("token"))
    login = (
      <Nav>
        <Nav.Link href="/mypage">마이페이지</Nav.Link>
        <Nav.Link href="/logout">로그아웃</Nav.Link>
      </Nav>
    )
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">QUPP</Navbar.Brand>
        <Nav>
          <Nav.Link href="/question">질문하기</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {login}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;
