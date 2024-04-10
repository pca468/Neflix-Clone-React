import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet , useNavigate } from "react-router-dom"


//Outlet =>  라우터 안에 있는 자손들을 갖고 오게 도와주는 컴포넌트

const AppLayout = () => { 
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate()

  const searchByKeyword = (event) => {
    event.preventDefault()
    //url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("")

  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-dark">
        <Container fluid >
          <Navbar.Brand href="#" variant>
            <img 
            src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
            alt="Neflix logo"
            width={100}
            style={{marginLeft:20}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" , }}
              navbarScroll
            >
              <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
              <Nav.Link href="/movies" style={{color: "white"}}>Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
