import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "./style.scss";

/**
 * Renders NavBar component with props to control the test-mode selection and memory pack
 * @params {testMode, setTestMode, setPack} props
 * @returns NavBar component
 */
const NavBar = (props) => {
  const { memoryMode, setMemoryMode, testMode, setTestMode, pack, setPack } = props;

  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">SM</Navbar.Brand>

          <div className="nav-bar__right">
            {/* <p className="nav-bar__score">Score: {score}</p> */}
            <Form.Check
              type="switch"
              id="memory-mode-switch"
              label="Memory Mode"
              checked={memoryMode}
              onChange={() => setMemoryMode(!memoryMode)}
            />
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
              {pack.map((p) => {
                return (
                  <option key={p.id} id={p.id} value={p.packs}>
                    {p.packs}
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
