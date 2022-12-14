import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "./style.scss";

const NavBar = (props) => {
  const { testMode, setTestMode, pack, setPack } = props;
  // console.log(Object.entries(pack));
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">SM</Navbar.Brand>
          <div className="nav-bar__right">
            <Form.Check
              type="switch"
              id="test-mode-switch"
              label="Test Mode"
              checked={testMode}
              onChange={() => setTestMode(!testMode)}
            />
            <Form.Select
              className="nav-bar__select"
              aria-label="Select Memory Verse Pack"
              onChange={(e) => setPack(e.target.value)}
            >
              <option>Select Pack</option>
              {Object.entries(pack).map((p) => {
                return (
                  <option key={p[0]} id={p[0]} value={p[1]}>
                    {p[1]}
                  </option>
                );
              })}
            </Form.Select>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
