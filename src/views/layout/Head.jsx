import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import useAuth from "../../hooks/useAuth";

function Head() {
  const { isAuthenticated } = useAuth();

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
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link href="/my_page">마이페이지</Nav.Link>
                <Nav.Link href="/logout">로그아웃</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">로그인</Nav.Link>
                <Nav.Link href="/create_account">회원가입</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;
