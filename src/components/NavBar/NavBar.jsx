import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PackSelector from "./PackSelector/PackSelector";

import "./style.scss";

/**
 * Renders NavBar component with enhanced pack selection
 * @params {testMode, setTestMode, selectedPacks, onPacksChange, packs, allVerses} props
 * @returns NavBar component
 */
const NavBar = (props) => {
  const {
    isTestMode,
    testMode,
    setTestMode,
    selectedPacks,
    onPacksChange,
    packs,
    allVerses
  } = props;

  const [showPackSelector, setShowPackSelector] = useState(false);

	const getSelectionSummary = () => {
	    if (!selectedPacks || Object.keys(selectedPacks).length === 0) {
	      return "Select Packs";
	    }

	    const packCount = Object.keys(selectedPacks).length;
	    const verseCount = Object.values(selectedPacks).reduce(
	      (sum, pack) => sum + pack.verses.length,
	      0
	    );

	    return `${packCount} Pack${packCount !== 1 ? 's' : ''}, ${verseCount} Verse${verseCount !== 1 ? 's' : ''}`;
	  };
  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">SM</Navbar.Brand>

          <div className="nav-bar__right">
            {/* <p className="nav-bar__score">Score: {score}</p> */}
            {isTestMode ? (
              <>
                <Form.Check
                  type="switch"
                  id="test-mode-switch"
                  label="Test Mode"
                  checked={testMode}
                  onChange={() => setTestMode(!testMode)}
                />
              </>
            ) : (
              <></>
            )}
            <Button
              variant="outline-primary"
              size="sm"
              className="pack-selector-btn"
              aria-label="Select Memory Verse Pack"
              onClick={() => setShowPackSelector(true)}
            >
              {getSelectionSummary()}
            </Button>
          </div>
        </Container>
      </Navbar>

      <PackSelector
        show={showPackSelector}
        onHide={() => setShowPackSelector(false)}
        packs={packs}
        allVerses={allVerses}
        currentSelection={selectedPacks}
        onApply={onPacksChange}
      />
    </>
  );
};

export default NavBar;
